import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const IconRow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/Cloud.png')} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>20°</Text>
          <Text style={styles.text}>Cloudy</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.iconContainer}>
        <Image source={require('../assets/GrassLen.png')} style={styles.icon} />
        <Text style={styles.text}>16mm</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.iconContainer}>
        <Image source={require('../assets/battery.png')} style={styles.icon} />
        <Text style={styles.text}>58%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:'4%'
 
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:'3%',
    marginLeft:'3%'
  },
  textContainer: {
    height: '100%',
    padding:'4%'
  },
  separator: {
    width: 1,
    height: '70%',
    backgroundColor: 'white',
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 12,
    color:'white',
    fontWeight:600
  },
});

export default IconRow;
