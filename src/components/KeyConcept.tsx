import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

interface KeyConceptProps {
  title?: string;
  children: React.ReactNode;
}

const KeyConcept: React.FC<KeyConceptProps> = ({ title = 'Key Concept', children }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const containerStyle = {
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: isDarkMode ? '#3399ff' : '#0056b3', // Using primary color
    backgroundColor: isDarkMode ? 'rgba(51, 153, 255, 0.1)' : 'rgba(0, 86, 179, 0.05)',
  };

  const titleStyle = {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: isDarkMode ? '#3399ff' : '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{title}:</div>
      <div>{children}</div>
    </div>
  );
};

export default KeyConcept;
