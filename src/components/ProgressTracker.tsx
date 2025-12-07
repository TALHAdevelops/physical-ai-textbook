import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

interface ProgressTrackerProps {
  moduleName: string;
  progress: number; // Percentage from 0 to 100
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ moduleName, progress }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const containerStyle = {
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: isDarkMode ? '#28a745' : '#218838', // Green color for progress
    backgroundColor: isDarkMode ? 'rgba(40, 167, 69, 0.1)' : 'rgba(33, 136, 56, 0.05)',
  };

  const progressBarContainerStyle = {
    backgroundColor: isDarkMode ? '#495057' : '#e9ecef',
    borderRadius: '5px',
    height: '10px',
    marginTop: '0.5rem',
    overflow: 'hidden',
  };

  const progressBarStyle = {
    width: `${progress}%`,
    height: '100%',
    backgroundColor: isDarkMode ? '#28a745' : '#218838',
    borderRadius: '5px',
    transition: 'width 0.5s ease-in-out',
  };

  const progressTextStyle = {
    fontSize: '0.9rem',
    color: isDarkMode ? '#ced4da' : '#6c757d',
    textAlign: 'right',
  };

  return (
    <div style={containerStyle}>
      <p style={{ fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>
        Progress for {moduleName}:
      </p>
      <div style={progressBarContainerStyle}>
        <div style={progressBarStyle}></div>
      </div>
      <p style={progressTextStyle}>{progress}% Complete</p>
    </div>
  );
};

export default ProgressTracker;
