import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, ActivityIndicator, Image, KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard ,
  ScrollView } from 'react-native';
// import { CheckBox } from 'react-native-elements';
// import { FontAwesome } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { auth, database, writeUserData } from '../components/firebaseConfig';  // Adjust the path to FirebaseConfig.js accordingly
import { ref, set } from 'firebase/database';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignupScreen ({navigation})  {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [acceptsTerms, setAcceptsTerms] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


  const writeUserData = (userId, name, email, phoneNumber, password) => {
    set(ref(database, 'users/' + userId), {
      username: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password  // Storing passwords in the database is not recommended
    });
  };

  const handleSignUp = async () => {
    try {
      setModalVisible(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Sign-up successful.
      const user = userCredential.user;
      writeUserData(user.uid, fullName, email, phone, password);
      setModalVisible(false);
      navigation.navigate('LoginScreen');
    } catch (error) {
      // Handle Errors here.
      console.error(error.message);
      setModalVisible(false);
    }
  };
  


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
  keyboardVerticalOffset={Platform.OS === "ios" ? 84 : 0}
      
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subTitle}>Please fill in the form to continue</Text>

      <Text style={styles.inputLabel}>Name</Text>
      <View style={styles.inputWrapper}>
        {/* <FontAwesome name="user" size={20} color="gray" style={styles.icon} /> */}
        <TextInput 
          style={styles.input}
          placeholder="name"
          value={fullName}
          placeholderTextColor="#A3AAB6" 
          onChangeText={setFullName}
        />
      </View>

      <Text style={styles.inputLabel}>Email</Text>
      <View style={styles.inputWrapper}>
        {/* <FontAwesome name="envelope" size={20} color="gray" style={styles.icon} /> */}
        <TextInput 
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#A3AAB6" 
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Text style={styles.inputLabel}>Phone</Text>
      <View style={styles.inputWrapper}>
        {/* <FontAwesome name="phone" size={20} color="gray" style={styles.icon} /> */}
        <TextInput 
          style={styles.input}
          placeholder="phone #"
          placeholderTextColor="#A3AAB6" 
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <Text style={styles.inputLabel}>Password</Text>
      <View style={styles.inputWrapper}>
        {/* <FontAwesome name="lock" size={20} color="gray" style={styles.icon} /> */}
        <TextInput 
          style={styles.input}
          placeholder="password"
          placeholderTextColor="#A3AAB6" 
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.checnB}>

      <Checkbox
        checked={acceptsTerms}
        onPress={() => setAcceptsTerms(!acceptsTerms)}
      />
      <Text style={styles.subTitle}>Agree with Term and Condition.</Text>
      </View>
      <TouchableOpacity 
      style={styles.createAccountButton}
      // onPress={() => setModalVisible(true)}
      onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.signInText}>Already have an account? 
      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('LoginScreen');
      }}
      >
      <Text style={styles.signInLink}>Sign in</Text>
      </TouchableOpacity>
      </Text>

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
            <Text style={styles.modalTitle}>Sign Up Successful!</Text>
            <Text style={styles.modalText}>Your account has been created. Please wait a moment. We are preparing for you...</Text>
            <ActivityIndicator size="large" color="#0F969C" />
          </View>
        </View>
      </Modal>
    </View>
    </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop:40,
    backgroundColor:'#05161A'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color:'white'
  },
  subTitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 30,
    alignSelf: 'flex-start',
  },
  inputWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    height:63,
    borderColor: '#374760',
    paddingBottom: 10,
    marginBottom: 20,
    borderRadius:16,
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 16,
    color: '#D9D9D9',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color:'white'
  },
  icon: {
    alignSelf: 'center',
  },
  createAccountButton: {
    backgroundColor: '#0F969C',
    padding: 10,
    borderRadius: 5,
    // marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  signInText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#9A9A9A',
  },
  signInLink: {
    color: '#4a69bd',
  },
  checnB: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
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


