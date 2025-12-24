import React, { useMemo, useState, useRef, useEffect } from 'react';
import { View, Text, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

interface MathTextProps {
  text: string;
  fontSize?: 'xs' | 'small' | 'medium' | 'large' | 'xl' | '2xl' | '3xl' | number;
  color?: string;
  style?: any;
  isRTL?: boolean; // Support for right-to-left languages like Urdu
}

const MathText: React.FC<MathTextProps> = ({
  text,
  fontSize = 'medium',
  color = '#111827',
  style,
  isRTL = false
}) => {
  // Early return for invalid or empty text
  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    console.warn('MathText: Received empty or invalid text');
    return (
      <Text style={[{ fontSize: 16, color: '#9CA3AF', fontStyle: 'italic' }, style]}>
        No content available
      </Text>
    );
  }

  // Map fontSize to actual pixel sizes
  const getFontSizeValue = () => {
    // If fontSize is a number, use it directly
    if (typeof fontSize === 'number') {
      return fontSize;
    }

    // Otherwise map the string to pixel size
    switch (fontSize) {
      case 'xs': return 14;
      case 'small': return 16;
      case 'medium': return 18;
      case 'large': return 22;
      case 'xl': return 26;
      case '2xl': return 30;
      case '3xl': return 36;
      default: return 18;
    }
  };

  const fontSizeValue = getFontSizeValue();

  const stripHtml = (value: string): string =>
    value
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const toFallbackHtml = (value: string): string =>
    value
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>')
      .trim();

  const containsMathOrMarkdown = (value: string): boolean =>
    /\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\]|\*\*.*?\*\*|__.*?__/.test(value);

  const plainTextContent = useMemo(() => {
    if (!text || typeof text !== 'string') {
      return '';
    }

    let plain = text;

    plain = plain.replace(/\*\*/g, '');
    plain = plain.replace(/__([^_]+)__/g, '$1');
    plain = plain.replace(/\\text\{([^}]*)\}/g, '$1');
    plain = plain.replace(/\\frac\s*\{([^}]*)\}\s*\{([^}]*)\}/g, '$1/$2');
    plain = plain.replace(/\times/g, '×');
    plain = plain.replace(/\cdot/g, '·');
    plain = plain.replace(/\angle/g, '∠');
    plain = plain.replace(/\triangle/g, 'Δ');
    plain = plain.replace(/\\subset/g, '⊂');
    plain = plain.replace(/\\supset/g, '⊃');
    plain = plain.replace(/\\in/g, '∈');
    plain = plain.replace(/\\notin/g, '∉');
    plain = plain.replace(/\\left|\\right/g, '');
    plain = plain.replace(/\\%/g, '%');
    plain = plain.replace(/\\pi/g, 'π');
    plain = plain.replace(/\\sqrt\s*\{([^}]*)\}/g, '√($1)');
    // Remove escaped braces (for set notation) - \{ becomes {
    plain = plain.replace(/\\\{/g, '{');
    plain = plain.replace(/\\\}/g, '}');
    plain = plain.replace(/\\{2}/g, String.fromCharCode(92));
    plain = plain.replace(/\$/g, '');
    plain = plain.replace(/&nbsp;/gi, ' ');
    plain = plain.replace(/<[^>]+>/g, '');

    // Clean up stray spaces introduced around math symbols
    plain = plain.replace(/∠\s+/g, '∠');
    plain = plain.replace(/Δ\s+/g, 'Δ');
    plain = plain.replace(/√\s*\(/g, '√(');

    return plain.trim();
  }, [text]);

  // Clean and validate math expressions - SAFE version
  const wrapCurrencySegments = (value: string): string => {
    return value.replace(/\u20B9[\d.,\s-]*/g, (match) => {
      const normalized = match.trim();
      if (!normalized) {
        return match;
      }
      const safe = normalized
        .replace(/\\/g, '\\\\')
        .replace(/}/g, '\\}')
        .replace(/\{/g, '\\{');
      return `\\currency{${safe}}`;
    });
  };

  const fallbackRendered = containsMathOrMarkdown(text)
    ? toFallbackHtml(text)
    : text.trim();

  const cleanMathExpression = (math: string): string => {
    try {
      // Remove delimiters to get the inner content
      let content = math;
      if (math.startsWith('$$') && math.endsWith('$$')) {
        content = math.slice(2, -2);
      } else if (math.startsWith('$') && math.endsWith('$')) {
        content = math.slice(1, -1);
      } else if (math.startsWith('\\[') && math.endsWith('\\]')) {
        content = math.slice(2, -2);
      } else if (math.startsWith('\\(') && math.endsWith('\\)')) {
        content = math.slice(2, -2);
      }

      // Clean common issues
      content = content.trim();

      // If content is empty or just whitespace, return empty string
      if (!content || content.length === 0) {
        return '';
      }

      content = wrapCurrencySegments(content);

      // Just normalize whitespace, don't mess with backslashes
      content = content.replace(/\s+/g, ' ');

      // Return with original delimiters
      if (math.startsWith('$$')) {
        return `$$${content}$$`;
      } else if (math.startsWith('$')) {
        return `$${content}$`;
      } else if (math.startsWith('\\[')) {
        return `\\[${content}\\]`;
      } else if (math.startsWith('\\(')) {
        return `\\(${content}\\)`;
      }

      return math;
    } catch (e) {
      // If cleaning fails, return original math expression
      return math;
    }
  };

  // Process text to handle LaTeX and markdown
  const { processedContent, usedFallback } = useMemo(() => {
    if (!text || typeof text !== 'string') {
      console.warn('MathText received invalid text');
      return { processedContent: fallbackRendered, usedFallback: true };
    }

    let result = text.trim();

    if (!result) {
      console.warn('MathText received empty text');
      return { processedContent: fallbackRendered, usedFallback: true };
    }

    try {
      // STEP 0: Auto-wrap naked LaTeX commands in $ delimiters
      // This handles cases where LaTeX commands appear without delimiters
      const autoWrapLatexCommands = (str: string): string => {
        // First, protect already-delimited math by replacing with placeholders
        const mathSegments: string[] = [];
        let workingStr = str;

        // Extract existing $...$ segments
        workingStr = workingStr.replace(/\$[^$]+\$/g, (match) => {
          const index = mathSegments.length;
          mathSegments.push(match);
          return `__MATH_${index}__`;
        });

        // Now find naked LaTeX commands (not in protected segments)
        // Pattern: \command or \command{...}
        const latexPattern = /\\(subset|supset|subseteq|supseteq|in|notin|times|cdot|div|pm|infty|alpha|beta|gamma|theta|pi|sigma|delta|mu|lambda|omega|rightarrow|leftarrow|Rightarrow|Leftarrow|leq|geq|neq|approx|equiv|forall|exists|nabla|partial|angle|circ|degree)(?:\s*\{[^}]*\})?/g;

        workingStr = workingStr.replace(latexPattern, (match) => `$${match}$`);

        // Restore protected math segments
        mathSegments.forEach((segment, index) => {
          workingStr = workingStr.replace(`__MATH_${index}__`, segment);
        });

        return workingStr;
      };

      result = autoWrapLatexCommands(result);

      // SIMPLIFIED & SAFE: Fix only the most common corrupted LaTeX escape sequences
      // This is conservative - it only fixes KNOWN corruption patterns
      const fixCorruptedLatex = (str: string): string => {
        try {
          let fixed = str;

          // Use explicit character codes to match escape sequences
          const TAB = String.fromCharCode(9);    // \t
          const FORM_FEED = String.fromCharCode(12);  // \f
          const BACKSPACE = String.fromCharCode(8);   // \b
          const CARRIAGE_RETURN = String.fromCharCode(13); // \r

          // Only fix the MOST COMMON corruptions that cause empty renders
          // Pattern 1: TAB + "ext{" -> "\text{"
          fixed = fixed.replace(new RegExp(TAB + 'ext\\{', 'g'), '\\text{');

          // Pattern 2: FORM_FEED + "rac{" -> "\frac{"
          fixed = fixed.replace(new RegExp(FORM_FEED + 'rac\\{', 'g'), '\\frac{');

          // Pattern 3: TAB + "imes" -> "\times"
          fixed = fixed.replace(new RegExp(TAB + 'imes', 'g'), '\\times');

          // Pattern 4: TAB + "heta" -> "\theta"
          fixed = fixed.replace(new RegExp(TAB + 'heta', 'g'), '\\theta');

          // Pattern 5: TAB + "riangle" -> "\triangle"
          fixed = fixed.replace(new RegExp(TAB + 'riangle', 'g'), '\\triangle');

          // Pattern 6: BACKSPACE + "eta" -> "\beta"
          fixed = fixed.replace(new RegExp(BACKSPACE + 'eta', 'g'), '\\beta');

          // Pattern 7: CARRIAGE_RETURN + "ho" -> "\rho"
          fixed = fixed.replace(new RegExp(CARRIAGE_RETURN + 'ho', 'g'), '\\rho');

          // Pattern 8: FORM_FEED + "irc" -> "\circ" (degree symbol)
          fixed = fixed.replace(new RegExp(FORM_FEED + 'irc', 'g'), '\\circ');

          // Pattern 9: TAB + "irc" -> "\circ" (alternative corruption)
          fixed = fixed.replace(new RegExp(TAB + 'irc', 'g'), '\\circ');

          // Pattern 10: Handle standalone "circ" that might have lost its backslash
          // Only fix if it appears after a $ or ^ (common in LaTeX degree notation like $60^{circ}$)
          const circFix1 = fixed.replace(/\$(\d+)\^\{circ\}\$/g, '$$$$1^{\\circ}$$');
          const circFix2 = circFix1.replace(/\{circ\}/g, '{\\circ}');

          // Debug: log if we fixed any \circ issues
          if (circFix2 !== fixed) {
            console.log('MathText: Fixed \\circ corruption in text');
          }

          return circFix2;
        } catch (e) {
          // If even this simple fix fails, just return original
          console.warn('LaTeX fix failed, using original:', e);
          return str;
        }
      };

    // Apply LaTeX corruption fix
    result = fixCorruptedLatex(result);

      // SIMPLIFIED: Fix unbalanced markdown more safely
      const fixUnbalancedMarkdown = (str: string): string => {
        try {
          let fixed = str;

          // Only fix the MOST COMMON pattern: **Label: text
          // Close bold after colon+space before capital letter
          fixed = fixed.replace(/\*\*([^*\n]+?:)\s+(?=[A-Z])/g, '**$1** ');

          // Ensure even number of ** markers (simple fallback)
          const boldCount = (fixed.match(/\*\*/g) || []).length;
          if (boldCount % 2 !== 0) {
            // Add closing ** at the end
            fixed += '**';
          }

          return fixed;
        } catch (e) {
          console.warn('Markdown fix failed, using original:', e);
          return str;
        }
      };

      result = fixUnbalancedMarkdown(result);

      // SAFE: Validate and fix unbalanced dollar signs
      try {
        const dollarCount = (result.match(/\$/g) || []).length;
        if (dollarCount % 2 !== 0) {
          // Remove the last unmatched dollar sign
          const lastDollarIndex = result.lastIndexOf('$');
          if (lastDollarIndex !== -1) {
            result = result.slice(0, lastDollarIndex) + result.slice(lastDollarIndex + 1);
          }
        }
      } catch (e) {
        console.warn('Dollar sign balancing failed:', e);
      }

      // SAFE: Extract math expressions to protect them from markdown processing
      const mathExpressions: string[] = [];

      // Use a unique placeholder that won't be affected by markdown
      const createPlaceholder = (index: number) => `\uE000MATH${index}\uE001`;

      try {
        // Replace math expressions with placeholders (display math first, then inline)
        // Process $$ before $ to avoid conflicts
        result = result.replace(/\$\$[\s\S]*?\$\$/g, (match) => {
          const cleaned = cleanMathExpression(match);
          if (!cleaned) return ''; // Remove empty math expressions

          const index = mathExpressions.length;
          mathExpressions.push(cleaned);
          return createPlaceholder(index);
        });

        // Then process single $ for inline math
        result = result.replace(/\$[^$]+?\$/g, (match) => {
          const cleaned = cleanMathExpression(match);
          if (!cleaned) return ''; // Remove empty math expressions

          const index = mathExpressions.length;
          mathExpressions.push(cleaned);
          return createPlaceholder(index);
        });

        // Process \[ \] and \( \) style delimiters
        result = result.replace(/\\\[[\s\S]*?\\\]|\\\(.*?\\\)/g, (match) => {
          const cleaned = cleanMathExpression(match);
          if (!cleaned) return '';

          const index = mathExpressions.length;
          mathExpressions.push(cleaned);
          return createPlaceholder(index);
        });
      } catch (e) {
        console.warn('Math expression extraction failed:', e);
        // Continue with whatever result we have
      }

      // SAFE: Process markdown for bold text
      try {
        result = result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        result = result.replace(/__(.*?)__/g, '<strong>$1</strong>');
      } catch (e) {
        console.warn('Bold markdown processing failed:', e);
      }

      // SAFE: Process markdown for italic text
      try {
        result = result.replace(/([^\*]|^)\*([^\*]+?)\*([^\*]|$)/g, '$1<em>$2</em>$3');
        result = result.replace(/([^_]|^)_([^_]+?)_([^_]|$)/g, '$1<em>$2</em>$3');
      } catch (e) {
        console.warn('Italic markdown processing failed:', e);
      }

      // SAFE: Restore math expressions
      try {
        mathExpressions.forEach((math, index) => {
          result = result.replace(createPlaceholder(index), math);
        });
      } catch (e) {
        console.warn('Math expression restoration failed:', e);
      }

      // SAFE: Convert newlines to HTML line breaks
      try {
        result = result.replace(/\n\n/g, '<br><br>'); // Paragraph breaks
        result = result.replace(/\n/g, '<br>'); // Single line breaks
      } catch (e) {
        console.warn('Newline processing failed:', e);
      }

      // SAFE: Fix escaped braces in text content (outside math mode)
      // Replace \{ and \} with plain braces in HTML text (not in math delimiters)
      try {
        // Only replace escaped braces that are NOT inside $...$ delimiters
        // This is for text like "set A = \{1, 2, 3\}" which should show as "set A = {1, 2, 3}"
        // First, protect $...$ segments
        const protectedSegments: string[] = [];
        let workStr = result.replace(/\$[^$]+\$/g, (match) => {
          const idx = protectedSegments.length;
          protectedSegments.push(match);
          return `__PROTECT_${idx}__`;
        });

        // Now replace escaped braces in unprotected text
        workStr = workStr.replace(/\\\{/g, '{').replace(/\\\}/g, '}');

        // Restore protected segments
        protectedSegments.forEach((seg, idx) => {
          workStr = workStr.replace(`__PROTECT_${idx}__`, seg);
        });

        result = workStr;
      } catch (e) {
        console.warn('Brace cleanup failed:', e);
      }

      // Debug: log processed text length for very long content
      if (result.length > 1000) {
        console.log('MathText processing long content:', result.length, 'chars');
      }

      // Debug: log if processed text is suspiciously short
      if (result.length < 10 && text.length > 100) {
        console.warn('MathText: Processed text became very short!', {
          originalLength: text.length,
          processedLength: result.length,
          processed: result
        });
      }

      const processedPreview = stripHtml(result);
      const originalPreview = stripHtml(text);
      if (processedPreview.length === 0 && originalPreview.length > 0) {
        console.warn('MathText: Processed HTML collapsed, using fallback rendering.');
        return { processedContent: fallbackRendered, usedFallback: true };
      }

      return { processedContent: result, usedFallback: false };

    } catch (error) {
      // UNIVERSAL FAIL-SAFE: If processing fails for ANY reason, return original text
      // This ensures we ALWAYS show something rather than nothing
      console.error('MathText processing error:', error);
      console.log('Falling back to original text');

      // Return original text with basic newline handling
      console.warn('MathText: Exception during processing, using fallback rendering.');
      return { processedContent: fallbackRendered, usedFallback: true };
    }
  }, [text, fallbackRendered]);

  // Check if text contains math or markdown
  const needsWebView = useMemo(() => {
    // If text is invalid, we don't need WebView (early return will handle it)
    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return false;
    }
    const hasMath = /\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\]/.test(text);
    const hasMarkdown = /\*\*.*?\*\*|__.*?__|([^\*]|^)\*([^\*]+?)\*([^\*]|$)|([^_]|^)_([^_]+?)_([^_]|$)/.test(text);

    // Check for common LaTeX commands even without delimiters
    const hasLatexCommands = /\\(frac|sqrt|sum|int|lim|subset|supset|subseteq|supseteq|in|notin|times|cdot|div|pm|infty|alpha|beta|gamma|theta|pi|sigma|delta|mu|lambda|omega|rightarrow|leftarrow|Rightarrow|Leftarrow|leq|geq|neq|approx|equiv|forall|exists|nabla|partial|angle|circ|degree|text|mathbf|mathrm|left|right)\{?/.test(text);

    const needs = hasMath || hasMarkdown || hasLatexCommands;

    // Very long strings with math can overwhelm WebView rendering on some devices.
    // Fall back to plain text for stability while still showing the explanation content.
    const LENGTH_WEBVIEW_THRESHOLD = 1200;
    if (needs && text.length > LENGTH_WEBVIEW_THRESHOLD) {
      console.warn('MathText: Falling back to plain text for very long content', {
        length: text.length,
      });
      return false;
    }

    // Debug log for troubleshooting
    if (!needs && text.length > 100) {
      console.log('MathText: Using plain text mode for long content (no math/markdown detected)');
    }

    return needs;
  }, [text]);

  // Generate HTML with MathJax configuration
  const html = useMemo(() => {
    // NOTE: processedContent already contains safe HTML tags we intentionally created
    // (<br>, <strong>, <em>) and LaTeX with proper backslashes.
    // We DON'T escape HTML here because:
    // 1. Content is from our controlled data files (not user input)
    // 2. We need our HTML formatting tags to render properly
    // 3. LaTeX backslashes must be preserved for MathJax

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
              font-size: ${fontSizeValue}px;
              line-height: 1.5;
              color: ${color};
              padding: 0;
              margin: 0;
              overflow-x: hidden;
              overflow-y: visible;
              -webkit-text-size-adjust: 100%;
              direction: ${isRTL ? 'rtl' : 'auto'};
              unicode-bidi: ${isRTL ? 'embed' : 'plaintext'};
              min-height: fit-content;
              text-align: ${isRTL ? 'right' : 'left'};
            }
            #content {
              width: 100%;
              word-wrap: break-word;
              overflow-wrap: break-word;
              white-space: normal;
              direction: ${isRTL ? 'rtl' : 'auto'};
              unicode-bidi: ${isRTL ? 'embed' : 'plaintext'};
              display: inline-block;
              text-align: ${isRTL ? 'right' : 'left'};
            }
            /* Line break spacing */
            br {
              display: block;
              content: "";
              margin-top: 0.15em;
            }
            /* Markdown styling */
            strong {
              font-weight: 700;
            }
            em {
              font-style: italic;
            }
            /* MathJax styling - compact rendering */
            .MathJax {
              font-size: 0.95em !important;
            }
            mjx-container {
              display: inline-block;
              margin: 0 1px;
              vertical-align: middle;
              max-width: 100%;
            }
            mjx-container[display="true"] {
              display: block;
              margin: 2px 0;
            }
            /* Compact math rendering */
            mjx-math {
              line-height: 1.1;
            }
            /* CRITICAL: Hide all MathJax error messages */
            .mjx-merror,
            merror,
            [data-mjx-error],
            mjx-merror {
              display: none !important;
              visibility: hidden !important;
              height: 0 !important;
              width: 0 !important;
              opacity: 0 !important;
            }
            /* Prevent text selection issues */
            * {
              -webkit-user-select: none;
              user-select: none;
            }
          </style>

          <!-- MathJax Configuration -->
          <script>
            // Show content immediately - no delay
            document.documentElement.style.opacity = '1';

            // Initialize error counter
            window.mathJaxErrorCount = 0;

            // Custom error handler that suppresses errors completely
            window.MathJax = {
              tex: {
                inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
                displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
                packages: { '[+]': ['ams', 'newcommand', 'configmacros'] },
                macros: {
                  currency: ['\\\\text{#1}', 1],
                },
                processEscapes: true,
                processEnvironments: true,
                formatError: (jax, err) => {
                  // Log MathJax errors prominently
                  console.error('MathJax rendering error:', err.message);
                  console.error('Failed LaTeX:', jax?.math?.toString() || 'unknown');
                  // Track error count for fallback detection
                  window.mathJaxErrorCount = (window.mathJaxErrorCount || 0) + 1;
                  // Return empty string to suppress error display in UI
                  return '';
                }
              },
              svg: {
                fontCache: 'global',
                scale: 0.9,
                minScale: 0.5,
                matchFontHeight: true
              },
              options: {
                ignoreHtmlClass: 'no-mathjax',
                processHtmlClass: 'mathjax',
                renderActions: {
                  addMenu: [],
                  checkLoading: []
                },
                skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
              },
              startup: {
                typeset: true,
                pageReady: () => {
                  return MathJax.startup.defaultPageReady().then(() => {
                    // Count and remove any error elements that might have been created
                    const errors = document.querySelectorAll('merror, .mjx-merror, [data-mjx-error], mjx-merror');
                    const domErrors = errors.length;
                    errors.forEach(el => el.remove());

                    // Combine DOM errors with tracked formatError calls
                    const formatErrors = window.mathJaxErrorCount || 0;
                    const mathErrors = domErrors + formatErrors;

                    // Immediately calculate and send height (no delays)
                    const content = document.getElementById('content');
                    const height = Math.max(
                      content.scrollHeight,
                      content.offsetHeight,
                      document.body.scrollHeight
                    );

                    const textContent = content.textContent || '';
                    const hasVisibleContent = textContent.trim().length > 0;
                    const textLength = textContent.trim().length;

                    // Log for debugging
                    if (mathErrors > 0) {
                      console.warn('MathJax had ' + mathErrors + ' rendering errors (DOM: ' + domErrors + ', formatError: ' + formatErrors + ')');
                    }

                    window.ReactNativeWebView.postMessage(JSON.stringify({
                      height,
                      isEmpty: !hasVisibleContent,
                      textLength,
                      mathErrors
                    }));
                  }).catch((err) => {
                    console.error('MathJax critical error:', err);

                    // Remove any error elements
                    const errors = document.querySelectorAll('merror, .mjx-merror, [data-mjx-error], mjx-merror');
                    const domErrors = errors.length;
                    errors.forEach(el => el.remove());

                    // Combine DOM errors with tracked formatError calls
                    const formatErrors = window.mathJaxErrorCount || 0;
                    const mathErrors = domErrors + formatErrors + 1; // +1 for this catch error

                    // Send height even on error (no delays)
                    const content = document.getElementById('content');
                    const height = Math.max(
                      content.scrollHeight,
                      content.offsetHeight,
                      document.body.scrollHeight
                    );

                    const textContent = content.textContent || '';
                    const hasVisibleContent = textContent.trim().length > 0;
                    const textLength = textContent.trim().length;

                    console.warn('MathJax critical failure, will fallback. Errors: ' + mathErrors);

                    window.ReactNativeWebView.postMessage(JSON.stringify({
                      height,
                      isEmpty: !hasVisibleContent,
                      textLength,
                      mathErrors,
                      hadError: true
                    }));
                  });
                }
              }
            };
          </script>

          <!-- MathJax Library -->
          <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
        </head>
        <body>
          <div id="content">${processedContent}</div>
        </body>
      </html>
    `;
  }, [processedContent, fontSizeValue, color, isRTL]);

  // Dynamic height based on content - start with minimal initial height
  const [webViewHeight, setWebViewHeight] = useState(60);
  const [isRendering, setIsRendering] = useState(true);
  const [webViewFailed, setWebViewFailed] = useState(false);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Use a ref to track if we've already set the height (prevents infinite loops)
  const heightSetRef = useRef(false);

  // Track if WebView was actually created to prevent re-creation
  const webViewCreatedRef = useRef(false);

  const handleMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.height && !heightSetRef.current) {
        // Check if WebView rendered but content is empty
        if (data.isEmpty === true) {
          console.warn('MathText: WebView rendered empty content, falling back to plain text');
          setWebViewFailed(true);
          setIsRendering(false);
          if (fallbackTimerRef.current) {
            clearTimeout(fallbackTimerRef.current);
            fallbackTimerRef.current = null;
          }
          return;
        }

        // NEW: Check for MathJax errors or suspiciously large height with little visible text
        // This catches cases where MathJax fails silently and creates broken SVG elements
        const textLength = data.textLength || 0;
        const heightPerChar = textLength > 0 ? data.height / textLength : Infinity;
        const mathErrors = data.mathErrors || 0;

        // Fall back to plain text if:
        // 1. MathJax had rendering errors, OR
        // 2. Height is suspiciously large relative to text content, OR
        // 3. MathJax caught an error (hadError flag)
        if (mathErrors > 0 || data.hadError || (data.height > 300 && heightPerChar > 10)) {
          console.warn('MathText: MathJax rendering issue detected, falling back to plain text', {
            height: data.height,
            textLength,
            heightPerChar,
            mathErrors,
            hadError: data.hadError
          });
          setWebViewFailed(true);
          setIsRendering(false);
          if (fallbackTimerRef.current) {
            clearTimeout(fallbackTimerRef.current);
            fallbackTimerRef.current = null;
          }
          return;
        }

        // CRITICAL: Only set height ONCE to prevent infinite scroll loops
        heightSetRef.current = true;

        // Use smarter padding calculation based on content size
        const basePadding = data.height < 50 ? 15 : 25;
        const calculatedHeight = Math.max(data.height + basePadding, 50);
        console.log('WebView height set ONCE:', calculatedHeight, 'from content:', data.height);
        setWebViewHeight(calculatedHeight);
        // Mark as finished rendering
        setIsRendering(false);
        setWebViewFailed(false);
        if (fallbackTimerRef.current) {
          clearTimeout(fallbackTimerRef.current);
          fallbackTimerRef.current = null;
        }
      }
    } catch (e) {
      console.error('Error parsing WebView message:', e);
    }
  };

  useEffect(() => {
    // Reset height flag when text changes
    heightSetRef.current = false;
    webViewCreatedRef.current = false;

    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }

    if (needsWebView && !usedFallback) {
      setIsRendering(true);
      setWebViewFailed(false);
      // INCREASED TIMEOUT: Give WebView more time when many are loading
      fallbackTimerRef.current = setTimeout(() => {
        if (!heightSetRef.current && !webViewFailed) {
          console.warn('MathText: WebView timeout reached, falling back to plain text rendering.');
          fallbackTimerRef.current = null;
          setWebViewFailed(true);
        }
      }, 3000); // Increased from 1600ms to 3000ms
    } else {
      setIsRendering(false);
      setWebViewFailed(false);
    }

    return () => {
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    };
  }, [text, processedContent, needsWebView, usedFallback]);

  useEffect(() => {
    if (webViewFailed) {
      setIsRendering(false);
    }
  }, [webViewFailed]);

  const displayPlainText = plainTextContent.length > 0
    ? plainTextContent
    : text.trim();

  if (!needsWebView || usedFallback || webViewFailed) {
    return (
      <Text style={[{
        fontSize: fontSizeValue,
        color,
        lineHeight: fontSizeValue * 1.6,
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
      }, style]}>
        {displayPlainText || 'No content available'}
      </Text>
    );
  }

  // Only create WebView once per content
  if (!webViewCreatedRef.current) {
    webViewCreatedRef.current = true;
  }

  return (
    <View style={[{ width: '100%', height: webViewHeight, overflow: 'hidden' }, style]}>
      {webViewCreatedRef.current && (
        <WebView
          originWhitelist={['*']}
          source={{ html }}
          onMessage={handleMessage}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.error('WebView error: ', nativeEvent);
            setIsRendering(false);
            setWebViewFailed(true);
            if (fallbackTimerRef.current) {
              clearTimeout(fallbackTimerRef.current);
              fallbackTimerRef.current = null;
            }
          }}
          onLoadStart={() => {
            // Clear any existing timeout when load actually starts
            if (fallbackTimerRef.current) {
              clearTimeout(fallbackTimerRef.current);
              fallbackTimerRef.current = null;
            }
          }}
          onLoadEnd={() => {
            // Fallback: if height wasn't set after loading, set a minimal default
            if (!heightSetRef.current) {
              setTimeout(() => {
                if (webViewHeight < 50 && !heightSetRef.current) {
                  heightSetRef.current = true;
                  setWebViewHeight(60);
                }
                setIsRendering(false);
              }, 300);
            } else {
              setIsRendering(false);
            }
          }}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={false}
          style={{
            backgroundColor: 'transparent',
            width: '100%',
            height: webViewHeight,
            opacity: 1,
          }}
          // Performance optimizations
          androidLayerType="software"
          startInLoadingState={false}
          // Disable unnecessary features
          javaScriptEnabled={true}
          domStorageEnabled={false}
          cacheEnabled={true}
          mixedContentMode="always"
          // Prevent zoom
          scalesPageToFit={Platform.OS === 'android'}
          bounces={false}
          // CRITICAL: Prevent multiple WebView instances
          key={`webview-${text.substring(0, 50)}`}
        />
      )}
    </View>
  );
};

export default MathText;
