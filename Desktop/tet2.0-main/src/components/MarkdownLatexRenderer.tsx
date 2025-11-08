"use client";

import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import Markdown from 'markdown-to-jsx';

interface MarkdownLatexRendererProps {
  children: string;
}

const flattenMathChildren = (node: React.ReactNode): string => {
  return React.Children.toArray(node)
    .map((child) => {
      if (child === null || child === undefined) {
        return '';
      }

      if (typeof child === 'string' || typeof child === 'number') {
        return String(child);
      }

      if (React.isValidElement(child)) {
        const element = child as React.ReactElement<{ children?: React.ReactNode }>;
        return flattenMathChildren(element.props.children);
      }

      return '';
    })
    .join('');
};

// Custom component to render inline math
type MathRendererProps = {
  children?: React.ReactNode;
};

const CustomInlineMath: React.FC<MathRendererProps> = ({ children }) => {
  const mathString = flattenMathChildren(children).trim();
  return <InlineMath math={mathString} />;
};

// Custom component to render block math
const CustomBlockMath: React.FC<MathRendererProps> = ({ children }) => {
  const mathString = flattenMathChildren(children).trim();
  return <BlockMath math={mathString} />;
};

// Custom component to prevent block-level elements from being wrapped in <p> tags
const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ children, style, ...props }) => {
  // Check if children contain block-level elements like <ol>, <ul>, <table>, etc.
  // or our custom math components
  const containsBlockElements = React.Children.toArray(children).some(child => {
    if (React.isValidElement(child)) {
      const type = child.type as string | React.ComponentType;
      // Check for component names (string or function)
      const typeName = typeof type === 'function' ? type.name : type;
      return ['ol', 'ul', 'table', 'pre', 'blockquote', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'hr', 'CustomBlockMath', 'CustomInlineMath'].includes(typeName as string);
    }
    return false;
  });

  if (containsBlockElements) {
    // If a block element is found, render children directly without the <p> wrapper
    return <>{children}</>;
  }

  // Otherwise, render a standard paragraph
  return (
    <p
      style={{
        marginBottom: '1em',
        wordBreak: 'break-word',
        overflowWrap: 'anywhere',
        whiteSpace: 'pre-wrap',
        ...(style ?? {}),
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export default function MarkdownLatexRenderer({ children }: MarkdownLatexRendererProps) {
  // Pre-process the string to convert LaTeX patterns to custom components
  let processedContent = children;

  // Replace block math $$...$$ with <CustomBlockMath>...</CustomBlockMath>
  processedContent = processedContent.replace(/\$\$([\s\S]*?)\$\$/g, (match, mathContent) => {
    return `<CustomBlockMath>${mathContent.trim()}</CustomBlockMath>`;
  });

  // Replace inline math $...$ with <CustomInlineMath>...</CustomInlineMath>
  // This regex avoids matching $$...$$ by ensuring there's no $ immediately before or after the single $
  processedContent = processedContent.replace(/(?<!\$)\$([^$\n]+?)\$(?!\$)/g, (match, mathContent) => {
    return `<CustomInlineMath>${mathContent.trim()}</CustomInlineMath>`;
  });

  // Ensure "Step" based explanations remain readable even if the source string misses manual line breaks
  processedContent = processedContent.replace(/([.!?:)\]\"\'])([ \t\r\n]*)(Step\s*\d+\s*[:\-–]?)/g, (match, punctuation, whitespace, stepLabel) => {
    if (/\n\n/.test(whitespace)) {
      return `${punctuation}${whitespace}${stepLabel.trim()}`;
    }

    return `${punctuation}\n\n${stepLabel.trim()}`;
  });

  return (
    <Markdown
      options={{
        overrides: {
          p: Paragraph,
          strong: ({ children, ...props }) => (
            <strong style={{ fontWeight: 'bold' }} {...props}>
              {children}
            </strong>
          ),
          em: ({ children, ...props }) => (
            <em style={{ fontStyle: 'italic' }} {...props}>
              {children}
            </em>
          ),
          CustomInlineMath: CustomInlineMath,
          CustomBlockMath: CustomBlockMath,
        },
        // Force markdown-to-jsx to parse our custom tags
        enforceAtxHeadings: true,
        slugify: (str: string) => str,
      }}
    >
      {processedContent}
    </Markdown>
  );
}
