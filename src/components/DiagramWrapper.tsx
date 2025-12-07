import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface DiagramWrapperProps {
  chart: string;
}

const DiagramWrapper: React.FC<DiagramWrapperProps> = ({ chart }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      mermaid.contentLoaded(); // Ensure Mermaid is ready for new content
      mermaid.render('graphDiv', chart).then(({ svg, bindFunctions }) => {
        if (chartRef.current) {
          chartRef.current.innerHTML = svg;
          if (bindFunctions) {
            bindFunctions(chartRef.current);
          }
        }
      });
    }
  }, [chart]);

  return <div ref={chartRef} className="mermaid" />;
};

export default DiagramWrapper;
