// App.js

import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, Button, PanResponder, Modal,Dimensions,Image,TouchableOpacity } from 'react-native';
import { KorolJoystick } from "korol-joystick";
import Grid from '../components/Grid';




export default function DropDock({ navigation }) {
  const [extenders, setExtenders] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [modalVisible, setModalVisible] = useState(false);
  const blockSize = 10;
  
  const handleJoystickMove = (dx, dy) => {
    setPosition(prevPosition => ({
      x: prevPosition.x + dx/10,
      y: prevPosition.y - dy/10
    }));
  };


  return (
    <View style={styles.container}>
       <Image source={require('../assets/premapVector.png')} style={styles.backgroundImage}></Image>
       <View style={styles.header}>
      <Text style={styles.title}>Place Dock</Text>
      <Text style={styles.subtitle}>Describing the allocation of docking spaces.</Text>
      </View>
      
      <View style={styles.grid} >
      <Grid numberOfBlocks={((Dimensions.get('window').width - 40) / blockSize)} />
        {/* Render the lawn mower */}
        <View style={[styles.robot, { transform: [{translateX: position.x}, {translateY: position.y}] }]} >
            <Image source={require('../assets/Robot.png')}></Image>
        </View>


        
        {/* Render the extenders */}
        {extenders.map((extender, index) => (
          <View key={index} style={[styles.extender, extender]} />
        ))}
      </View>

      <KorolJoystick 
      style={{marginTop:15,marginBottom:15}}
  color="#294D61" 
  radius={55} 
  onMove={(data) => {
    console.log("Joystick dx:", data.position.x);
    handleJoystickMove(data.position.x, data.position.y);
  }}
/>
{/* <Button 
    title="Reset Position" 
    onPress={() => setPosition({ x: 0, y: 0 })}
/> */}
      
{
  extenders.length < 2 ? (
    <TouchableOpacity 
      style={styles.confirmButton}
      onPress={() => {
        setExtenders([...extenders, position]);
      }}
    >
      <Text style={styles.buttonTextCon}>Place Dock</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity 
      style={styles.confirmButton}
      // onPress={() => {
      //   navigation.navigate('Premap');
      // }}
      onPress={() => setModalVisible(true)}
    >
      <Text style={styles.buttonTextCon}>Confirm</Text>
    </TouchableOpacity>
  )
}

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image source={require('../assets/bg-sign.png')} style={styles.modalIcon} />
            <Text style={styles.modalTitle}>Save Settings</Text>
            <Text style={styles.modalText}>Save you settings before moving to next step!</Text>
            <TouchableOpacity 
              style={styles.confirmButton}
              onPress={() => {
                navigation.navigate('Premap');
              }}
              
            >
              <Text style={styles.buttonTextCon}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Removed justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05161A',
  },
  backgroundImage: {
    resizeMode: 'cover', 
    position: 'absolute',
    width: '100%',  // adjusted to 100% for full width
    height: '35%',  // you can adjust this height as per your requirement
    top: 0,  // set top to 0
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
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
  grid: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').width - 40,
    // borderWidth: 1,
    // borderColor: 'gray',
    backgroundColor: 'transparent',
    zIndex:999,
    marginBottom: 20
  },
  robot: {
    width: 50, // or your preferred size
    height: 50, // or your preferred size
    backgroundColor: 'transparent', // or your preferred color
    position: 'absolute',
    top: '50%', // Start from the center of the grid
    left: '50%', // Start from the center of the grid
    transform: [{ translateX: -25 }, { translateY: -25 }], // Center the robot in the start position
  },
  extender: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  joystick: {
    width: 80,
    height: 80,
    backgroundColor: 'lightgray',
    borderRadius: 40,
    margin: 20,
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
  modalView: {
    margin: 20,
    backgroundColor: "#05161A",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalIcon: {

  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 15,
    marginTop:15,
    textAlign: "center",
    color:'#FFFFFF'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:'#FFFFFF'
  },
});
