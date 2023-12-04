// Grid.js

import React from 'react';
import { View, Dimensions,StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const blockSize = 10; // You can define the size of each grid block

const Grid = ({ numberOfBlocks }) => {
  const numberOfVerticalLines = Math.floor(windowWidth / blockSize);
  const numberOfHorizontalLines = numberOfBlocks;

  return (
    <View style={styles.grid}>
    {/* Horizontal lines */}
    {Array.from({ length: 40 }).map((_, idx) => ( // Adjust the length accordingly
      <View 
        key={`h-line-${idx}`} 
        style={[styles.gridLineHorizontal, { top: `${(100/39) * idx}%` }]} // Adjust the top value based on your grid's rows
      />
    ))}
    {/* Vertical lines */}
    {Array.from({ length: 40 }).map((_, idx) => ( // Adjust the length accordingly
      <View 
        key={`v-line-${idx}`} 
        style={[styles.gridLineVertical, { left: `${(100/39) * idx}%` }]} // Adjust the left value based on your grid's columns
      />
    ))}
    {/* Rest of your components */}
  </View>
  );
};

export default Grid;


const styles = StyleSheet.create({
    grid: {
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').width - 40,
        backgroundColor: 'transparent',
        position: 'relative', // Add this line if not already present
        // Add this to create a grid overlay
        overflow: 'hidden', // This will keep the lines inside the container
      },
      gridLineVertical: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 1,
        backgroundColor: '#294D61', // or any other color
      },
      gridLineHorizontal: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: '#294D61', // or any other color
      },
      
})