import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity, StyleSheet, ScrollView,Image } from 'react-native';

export default function PairingRobots({ navigation }) {
  const [robotName, setRobotName] = useState('Mobots');

  useEffect(() => {
    fetch('http://your-local-ip') // Replace 'http://your-local-ip' with your actual local IP address
      .then(response => {
        if (response.status === 200) {
          return response.json(); // Assuming the name is sent in JSON format
        } else {
          throw new Error('Failed to fetch');
        }
      })
      .then(data => {
        setRobotName(data.name); // Replace 'data.name' with the actual path to the name in your response data
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#374760" barStyle="light-content" />
      <Image source={require('../assets/premapVector.png')} style={styles.backgroundImage}></Image>
      <View style={styles.header}>
        <Text style={styles.title}>Paring Robots</Text>
        <Text style={styles.subtitle}>Robot linked to the app, establishing a connection.</Text>
      </View>

      <ScrollView style={styles.deviceList}>
        <Text style={styles.deviceCategory}>Connected Devices</Text>
        <Text style={styles.deviceItem}>Mowbot -1210</Text>
        <Text style={styles.deviceItemSub}>Connected</Text>

        <Text style={styles.deviceCategory}>Available Devices</Text>
        <Text style={styles.deviceItemNull}>Mowbot -1211</Text>
        <Text style={styles.deviceItemNull}>Mowbot -1212</Text>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.tutorialButton}>
          <Text style={styles.buttonText}>Watch tutorial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmButton}
        onPress={() => navigation.navigate('Premap')}
        >
          <Text style={styles.buttonTextCon}>Confirm</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 120,
    marginBottom: 30,
    paddingLeft:40,
    paddingRight:40
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#A5A5A5',
    marginTop: 10,
    textAlign: 'center',
  },
  deviceList: {
    flex: 1,
  },
  deviceCategory: {
    fontSize: 18,
    color: '#AAA',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    paddingBottom: 10,
    fontWeight:700
  },
  deviceItem: {
    fontSize: 20,
    color: '#0C7075',
    marginBottom: 15,
    marginLeft:35,
    fontWeight:700
  },
  deviceItemNull: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 15,
    marginLeft:35
  },
  deviceItemSub: {
    fontSize: 13,
    color: 'white',
    marginBottom: 15,
    marginLeft:45,
    marginTop:-15
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  tutorialButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0F969C',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  confirmButton: {
    backgroundColor: '#0F969C',
    borderRadius: 30,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#0F969C',
    fontWeight:700
  },
  buttonTextCon: {
    fontSize: 16,
    color: 'white',
  },
});
