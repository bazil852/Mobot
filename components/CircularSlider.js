import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

const CircularSlider = ({ width, height, value, maximumValue }) => {
  // Function to convert polar coordinates to Cartesian
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    var angleInRadians = (angleInDegrees - 270) * Math.PI / 180.0; // Start from the bottom (180 degrees)
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  // Function to calculate the SVG path for a circle arc
  const calculateArcCircle = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    // Draw the arc only for the value portion
    return [
      'M', start.x, start.y,
      'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(' ');
  };

  const circleRadius = Math.min(width, height) / 2;
  const circleCenterX = width / 2;
  const circleCenterY = height / 2;
  const strokeWidth = 10; // Stroke width can be adjusted as needed
  const startAngle = 180; // Start from the bottom of the circle
  const endAngle = startAngle + (value / maximumValue) * 180.0; // Calculate end angle based on the value for a half-circle

   // Additional adjustments for styling
   const backgroundStrokeWidth = 5; // Reduced stroke width for a thinner line
   const backgroundStrokeColor = '#A9A9A9'; // Dark gray color for the background arc
   const handleRadius = 5; // Radius of the small circles at the ends
 
   // Calculate the position for the small circle at the end of the full arc
   const fullArcEndPos = polarToCartesian(circleCenterX, circleCenterY, circleRadius - strokeWidth / 2, 360);
 
   return (
     <View>
       <Svg height={height} width={width}>
         {/* Background circle arc */}
         <Path
           stroke={backgroundStrokeColor}
           strokeWidth={backgroundStrokeWidth}
           fill="none"
           d={calculateArcCircle(circleCenterX, circleCenterY, circleRadius - strokeWidth / 2, startAngle, 360)}
         />
 
         {/* Foreground circle arc based on the value */}
         <Path
           stroke="#48FFD3"
           strokeWidth={strokeWidth}
           fill="none"
           d={calculateArcCircle(circleCenterX, circleCenterY, circleRadius - strokeWidth / 2, startAngle, endAngle)}
         />
 
         {/* Small circle at the end of the full arc */}
         <Circle
           cx={fullArcEndPos.x}
           cy={fullArcEndPos.y}
           r={handleRadius}
           fill={backgroundStrokeColor}
         />
       </Svg>
     </View>
   );
 };
 
 export default CircularSlider;