import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function AllMaps ({navigation}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Image source={require('../assets/premapVector.png')} style={styles.backgroundImage}></Image>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>All Map</Text>

      </View>

      {/* Map Detail */}
      <View style={styles.mapDetail}>
        <View style={styles.map}>
          {/* Your map component */}
          <Text style={styles.mapText}>Total Area: 250 ft2</Text>
          <Text style={styles.mapText}>Total No-Go area: 2</Text>
        </View>
        <View style={styles.mapInfo}>
          <Text style={styles.mapTitle}>Map Detail</Text>
          <Text style={styles.mapName}>Name: Front area</Text>
          <Text style={styles.mapText}>Total Area: 250 ft2</Text>
          <Text style={styles.mapText}>No Go Areas: 3</Text>
          <TouchableOpacity style={styles.viewDetailButton}>
            <Text style={styles.viewDetailText}>View Detail</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Add Map */}
      <TouchableOpacity style={styles.addMapButton}>
        <Text style={styles.addMapText}>+ Add Map</Text>
      </TouchableOpacity>

      {/* Bottom Navbar */}
      <View style={styles.bottomNavbar}>
        {/* Add your BottomNavbar component here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //... Add your styles here
  container: {
    flex: 1,
    backgroundColor: '#05161A',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover', 
    position: 'absolute',
    width: '100%',  // adjusted to 100% for full width
    height: '35%',  // you can adjust this height as per your requirement
    top: 0,  // set top to 0
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  backArrow: {
    fontSize: 20,
    color: 'white',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  headerIcons: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  mapDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  map: {
    width: width * 0.45,
    height: height * 0.3,
    backgroundColor: 'gray', // Placeholder color
  },
  mapInfo: {
    width: width * 0.45,
    padding: 20,
    backgroundColor: '#121212',
  },
  mapTitle: {
    fontSize: 20,
    color: 'white',
  },
  mapName: {
    fontSize: 18,
    color: 'white',
  },
  mapText: {
    fontSize: 16,
    color: 'white',
  },
  viewDetailButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'green', // Placeholder color
    borderRadius: 8,
    alignItems: 'center',
  },
  viewDetailText: {
    color: 'white',
  },
  addMapButton: {
    margin: 20,
    padding: 10,
    backgroundColor: 'blue', // Placeholder color
    borderRadius: 8,
    alignItems: 'center',
  },
  addMapText: {
    color: 'white',
  },
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#121212',
  },
});


