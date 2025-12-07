import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

interface HardwareSpecProps {
  name: string;
  specs: { label: string; value: string | number }[];
}

const HardwareSpec: React.FC<HardwareSpecProps> = ({ name, specs }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const containerStyle = {
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: isDarkMode ? '#adb5bd' : '#6c757d', // Using secondary color
    backgroundColor: isDarkMode ? 'rgba(173, 181, 189, 0.1)' : 'rgba(108, 117, 125, 0.05)',
  };

  const titleStyle = {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '1.2rem',
    color: isDarkMode ? '#adb5bd' : '#6c757d',
  };

  const specItemStyle = {
    marginBottom: '0.3rem',
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{name} Specifications:</div>
      <ul>
        {specs.map((spec, index) => (
          <li key={index} style={specItemStyle}>
            <strong>{spec.label}:</strong> {spec.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HardwareSpec;
