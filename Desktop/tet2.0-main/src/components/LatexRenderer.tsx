"use client";

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface LatexRendererProps {
  children?: string | null;
  display?: boolean;
}

export default function LatexRenderer({ children, display = false }: LatexRendererProps) {
  // Simple regex to find LaTeX expressions within the text
  const latexRegex = /\$(.*?)\$/g;
  const content = typeof children === 'string' ? children : '';
  const parts = content.split(latexRegex);

  const renderTextWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, lineIndex) => (
      <span key={lineIndex}>
        {line}
        {lineIndex < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <span>
      {parts.map((part, index) => {
        // Even indices are plain text, odd indices are LaTeX expressions
        if (index % 2 === 1) {
          // Remove any leading/trailing whitespace from the LaTeX expression
          const latexExpression = part.trim();
          if (display) {
            return <BlockMath key={index}>{latexExpression}</BlockMath>;
          }
          return <InlineMath key={index}>{latexExpression}</InlineMath>;
        }
        return renderTextWithLineBreaks(part);
      })}
    </span>
  );
}