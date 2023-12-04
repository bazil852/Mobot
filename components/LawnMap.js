import React from 'react';
import { Svg, Polyline, Rect ,Image} from 'react-native-svg';

export default function LawnMap({ boundaryPath, mowerPath, obstacles ,mowerLocation}) {
    
  
    return (
    <Svg height="100%" width="100%" viewBox="5 13 75 75">
        
<   Polyline
        points={boundaryPath.map(coord => coord.join(',')).join(' ')}
        fill="#1D2431"
        stroke="white"
        strokeWidth="0.5"
        strokeDasharray="1,1" // Dotted line for boundary
      />
      {obstacles.map((obstacle, index) => (
        <Rect
          key={`obstacle-${index}`}
          x={obstacle[0]}
          y={obstacle[1]}
          width={obstacle[2]}
          height={obstacle[3]}
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          strokeDasharray="1,1" // Dotted line for obstacles
          rx="3"  // Rounded corners
          ry="3"  // Rounded corners
        />
      ))}
      
      <Polyline
        points={mowerPath.map(coord => coord.join(',')).join(' ')}
        fill="none"
        stroke="rgba(205, 255, 72, 0.33)"
        strokeWidth="1"
      />
      <Image 
        x={mowerLocation[0] - 9/ 2} 
        y={mowerLocation[1] - 9 / 2} 
        width={9} 
        height={9} 
        href={require('../assets/mowbot.png')}
      />

    </Svg>
  );
}
