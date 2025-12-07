import React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark'; // Using a dark theme for code blocks

interface CodeBlockProps {
  children: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language }) => {
  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
