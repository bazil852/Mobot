import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native';

const Premap = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/premapVector.png')} style={styles.backgroundImage}></Image>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pre-map Preparations</Text>
        <Text style={styles.subHeaderText}>Completed steps before moving to creating a map</Text>
      </View>
      
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('PairingRobots')}
      >
        <Text style={styles.buttonText}>Pairing Robot</Text>
        <Text style={styles.buttonDescription}>Robot linked to the app, establishing a connection.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('AssignExtendor')}
      >
        <Text style={styles.buttonText}>Assign Extender</Text>
        <Text style={styles.buttonDescription}>A device that enhances the reach or coverage of a network connection.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('AssignDock')}
      >
        <Text style={styles.buttonText}>Assign Dock</Text>
        <Text style={styles.buttonDescription}>Describing the allocation of docking spaces.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton}
      onPress={() => navigation.navigate('Mappre')}
      >
        <Text style={styles.continueButtonText}>continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05161A',
    padding: 20,
  },
  backgroundImage: {
    // flex: 1,
    resizeMode: 'cover', 
    position: 'absolute',
    width: '120%',
    height: '35%',
  },
  header: {
    alignItems: 'center',
    marginTop: 90,
    marginBottom: 30,
    paddingLeft:40,
    paddingRight:40
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#A5A5A5',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#05161A',
    padding: 30,
    borderColor:'white',
    borderWidth: 1,
    borderRadius: 32,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonDescription: {
    fontSize: 14,
    color: '#A5A5A5',
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: '#0F969C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    bottom:0,
  },
  continueButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Premap;
