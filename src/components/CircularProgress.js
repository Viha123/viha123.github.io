import React, { useEffect, useRef } from 'react';

function CircularProgress({ value, category }) { //VERY MUCH COPILOT POWERED
  
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = value / 100 * circumference;
  const progressRef = useRef(null);

  useEffect(() => {
    progressRef.current.style.transition = 'stroke-dashoffset 1s ease-in-out';
    progressRef.current.style.strokeDashoffset = progress;
  }, [value]);

  return (
    <svg height="120" width="120" style={{ transform: 'rotate(-90deg)' }}>
      <circle
        stroke="green"
        fill="transparent"
        strokeWidth="10"
        r={radius}
        cx="60"
        cy="60"
      />
      <circle
        ref={progressRef}
        stroke="grey"
        fill="transparent"
        strokeWidth="10"
        strokeDasharray={`${circumference} ${circumference}`}
        r={radius}
        cx="60"
        cy="60"
      />
      <text x="50%" y="50%" textAnchor="middle" stroke="black" strokeWidth="1px" dy=".3em">{category}</text>

    </svg>
  );
}

export default CircularProgress;