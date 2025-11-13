import React, { useMemo } from 'react';
import { View, Text, ActivityIndicator, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

interface MathTextProps {
  text: string;
  fontSize?: 'xs' | 'small' | 'medium' | 'large' | 'xl' | '2xl' | '3xl';
  color?: string;
  style?: any;
}

const MathText: React.FC<MathTextProps> = ({
  text,
  fontSize = 'medium',
  color = '#111827',
  style
}) => {
  // Map fontSize to actual pixel sizes
  const getFontSizeValue = () => {
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

  // Escape HTML special characters except for LaTeX delimiters
  const escapeHtml = (str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  // Process text to handle LaTeX and markdown
  const processedText = useMemo(() => {
    let result = text.trim();

    // Extract math expressions to protect them from markdown processing
    const mathExpressions: string[] = [];

    // Use a unique placeholder that won't be affected by markdown
    // Using Unicode private use area characters that won't appear in normal text
    const createPlaceholder = (index: number) => `\uE000MATH${index}\uE001`;

    // Replace math expressions with placeholders
    result = result.replace(/\$\$[\s\S]*?\$\$|\$.*?\$|\\\[[\s\S]*?\\\]|\\\(.*?\\\)/g, (match) => {
      const index = mathExpressions.length;
      mathExpressions.push(match);
      return createPlaceholder(index);
    });

    // Process markdown for bold text (**text** or __text__)
    result = result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/__(.*?)__/g, '<strong>$1</strong>');

    // Process markdown for italic text (*text* or _text_)
    // Match single asterisks/underscores not adjacent to the same character
    result = result.replace(/([^\*]|^)\*([^\*]+?)\*([^\*]|$)/g, '$1<em>$2</em>$3');
    result = result.replace(/([^_]|^)_([^_]+?)_([^_]|$)/g, '$1<em>$2</em>$3');

    // Restore math expressions
    mathExpressions.forEach((math, index) => {
      result = result.replace(createPlaceholder(index), math);
    });

    return result;
  }, [text]);

  // Check if text contains math or markdown
  const needsWebView = useMemo(() => {
    const hasMath = /\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\]/.test(text);
    const hasMarkdown = /\*\*.*?\*\*|__.*?__|([^\*]|^)\*([^\*]+?)\*([^\*]|$)|([^_]|^)_([^_]+?)_([^_]|$)/.test(text);
    return hasMath || hasMarkdown;
  }, [text]);

  // Generate HTML with MathJax configuration
  const html = useMemo(() => {
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
              line-height: 1.8;
              color: ${color};
              padding: 0;
              margin: 0;
              overflow-x: hidden;
              -webkit-text-size-adjust: 100%;
              direction: auto;
              unicode-bidi: plaintext;
            }
            #content {
              width: 100%;
              word-wrap: break-word;
              overflow-wrap: break-word;
              white-space: normal;
              direction: auto;
              unicode-bidi: plaintext;
              min-height: 40px;
            }
            /* Markdown styling */
            strong {
              font-weight: 700;
            }
            em {
              font-style: italic;
            }
            /* MathJax styling */
            .MathJax {
              font-size: 1em !important;
            }
            mjx-container {
              display: inline-block;
              margin: 0 2px;
            }
            mjx-container[display="true"] {
              display: block;
              margin: 8px 0;
            }
            /* Prevent text selection issues */
            * {
              -webkit-user-select: none;
              user-select: none;
            }
          </style>

          <!-- MathJax Configuration -->
          <script>
            window.MathJax = {
              tex: {
                inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
                displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
                processEscapes: true,
                processEnvironments: true
              },
              svg: {
                fontCache: 'global',
                scale: 1,
                minScale: 0.5,
                matchFontHeight: true
              },
              startup: {
                typeset: true,
                pageReady: () => {
                  return MathJax.startup.defaultPageReady().then(() => {
                    // Send height to React Native after rendering
                    setTimeout(() => {
                      const height = document.body.scrollHeight;
                      window.ReactNativeWebView.postMessage(JSON.stringify({ height }));
                    }, 100);
                  });
                }
              }
            };
          </script>

          <!-- MathJax Library -->
          <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
        </head>
        <body>
          <div id="content">${processedText}</div>
        </body>
      </html>
    `;
  }, [processedText, fontSizeValue, color]);

  // Dynamic height based on content - start with larger initial height
  const [webViewHeight, setWebViewHeight] = React.useState(200);

  const handleMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.height) {
        // Add more padding for better spacing, especially for RTL text
        setWebViewHeight(Math.max(data.height + 20, 200));
      }
    } catch (e) {
      console.error('Error parsing WebView message:', e);
    }
  };

  if (!needsWebView) {
    // If no math or markdown, render as plain text (for performance)
    return (
      <Text style={[{ fontSize: fontSizeValue, color, lineHeight: fontSizeValue * 1.6 }, style]}>
        {text}
      </Text>
    );
  }

  return (
    <View style={[{ width: '100%', height: webViewHeight }, style]}>
      <WebView
        originWhitelist={['*']}
        source={{ html }}
        onMessage={handleMessage}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: 'transparent', width: '100%', height: webViewHeight }}
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
      />
    </View>
  );
};

export default MathText;
