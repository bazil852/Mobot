// App.js

import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text,TextInput ,Button, PanResponder, Modal,Dimensions,Image,TouchableOpacity } from 'react-native';
import { KorolJoystick } from "korol-joystick";
import Grid from '../components/Grid';



export default function Nogo({ navigation }) {
  const [extenders, setExtenders] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [modalVisible, setModalVisible] = useState(false);
  const [mapName, setMapName] = useState('');
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
      <Text style={styles.title}>Select no go area</Text>
      <Text style={styles.subtitle}>NG area-111 <Image onPress={() => setModalVisible(true)} source={require('../assets/edit.png')}></Image> </Text>
       
      </View>
      <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.TopButtons}>
        <Text style={styles.buttonTextCon}>Start</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.TopButtons}>
        <Text style={styles.buttonTextCon}>Pause</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.TopButtons}>
        <Text style={styles.buttonTextCon}>End</Text>
    </TouchableOpacity>
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
      

    <TouchableOpacity 
      style={styles.confirmButton}
      onPress={() => {
        navigation.navigate('Mappre');
      }}
    //   onPress={() => setModalVisible(true)}
    >
      <Text style={styles.buttonTextCon}>Confirm</Text>
    </TouchableOpacity>


    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text>X</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.optionContainer}>
            <Text style={styles.optionText}>Edit Name</Text>
            <Text>Rename your lawn as per your choice.</Text>
            <TextInput 
              style={styles.inputField}
              value={mapName}
              onChangeText={setMapName}
              placeholder="Enter Map Name"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionContainer} onPress={() => setModalVisible(false)}>
            <Text style={styles.optionText}>Edit Boundaries</Text>
            <Text>Remake your lawn's main boundaries.</Text>
          </TouchableOpacity>
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
    color: '#48FFD3',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // or 'space-around' based on your spacing preference
    alignItems: 'center',
    marginBottom:10
  },
  confirmButton: {
    backgroundColor: '#0F969C',
    marginHorizontal: 5,
    borderRadius: 30,
    paddingHorizontal: 50,
    paddingVertical: 10,
    bottom:0
  },
  TopButtons: {
    backgroundColor: '#0F969C',
    marginHorizontal: 5,
    borderRadius: 30,
    paddingHorizontal: 30,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  optionContainer: {
    backgroundColor: '#05161A',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
  },
  optionText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    padding: 5,
    marginVertical: 10,
  },
});
