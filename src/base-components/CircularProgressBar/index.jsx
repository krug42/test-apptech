import React from 'react';
import { StyledCircle } from './styled';

function CircularProgressBar(props) {
  const { size, strokeWidth, percentage, trackColor, pathColor }  = props;
  const radius = (size - strokeWidth) / 2;
  const viewBox = `0 0 ${size} ${size}`;
  const strokeDasharray = radius * Math.PI * 2;
  const strokeDashoffset = strokeDasharray - strokeDasharray * percentage / 100;

  return (
    <StyledCircle
        width={size}
        height={size}
        viewBox={viewBox}
        strokeWidth={strokeWidth}
        trackColor={trackColor}
        pathColor={pathColor}>
        <circle
          className="track"
          cx={size / 2}
          cy={size / 2}
          r={radius}/>
        <circle
          className="path"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            strokeDasharray,
            strokeDashoffset
          }} />
    </StyledCircle>
  );
}

export default CircularProgressBar;