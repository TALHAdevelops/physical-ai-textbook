import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

interface LearningObjectiveProps {
  children: React.ReactNode;
}

const LearningObjective: React.FC<LearningObjectiveProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const containerStyle = {
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '8px',
    borderLeft: '5px solid',
    borderColor: isDarkMode ? '#66b3ff' : '#0056b3', // Using primary color for consistency
    backgroundColor: isDarkMode ? 'rgba(0, 86, 179, 0.2)' : 'rgba(0, 86, 179, 0.05)',
  };

  const titleStyle = {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: isDarkMode ? '#66b3ff' : '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Learning Objective:</div>
      <div>{children}</div>
    </div>
  );
};

export default LearningObjective;
