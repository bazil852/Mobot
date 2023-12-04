// @ts-nocheck
import { Canvas, useFrame, useLoader } from '@react-three/fiber/native';
import { useState,useEffect, useRef, Suspense, useLayoutEffect } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import {Text,StatusBar,TouchableOpacity, Image,StyleSheet,View, Button ,Animated,Dimensions} from 'react-native';
import { TextureLoader } from 'expo-three';
import { useAnimatedSensor, SensorType } from 'react-native-reanimated';
import { animated, useSpring } from '@react-spring/three';
// import Shoe from '../components/Shoe';
import IconRow from '../components/IconRow';
import path from '../assets/path';
import LawnMap from '../components/LawnMap';
import CircularSlider from '../components/CircularSlider';




export default function Dashboard  ({ navigation }){
  const [sliderValue, setSliderValue] = useState(75);
  const customPath = [
    // Bottom left curve
    [10, 80],
    // [10, 85],
    // [15, 80],
  
    // Bottom side
    [30, 80],
    [70, 80],
  
    // Bottom right curve
    [75, 80],
    // [80, 85],
    // [80, 90],
  
    // Right side
    [80, 70],
    [80, 40],
  
    // Top right dip
    [80, 20],
    [70, 20],
    [60, 30],
  
    // Top side
    [20, 30],
  
    // Top left curve
    [15, 30],
    [10, 35],
    [10, 40],
  
    // Left side
    [10, 80],
  ];
  const mowerPath = [
    [15, 75],
    [65, 75],
    [65, 70],
    [15, 70],
    [15, 65],
    [45, 65],
    [45, 60],
    [15, 60],
    [15, 55],
    [45, 55],
    // Add more points as necessary
  ];
  
  const obstacles = [
    [20, 40, 10, 10], // [x, y, width, height]
    [50, 50, 15, 15],
    [70, 70, 5, 10],
    // Add more obstacles as necessary
  ];
  const windowHeight = Dimensions.get('window').height ;
  const [viewHeight, setViewHeight] = useState(new Animated.Value(windowHeight * 0.6)); // Set initial height to 70% of the window height
  const [expand, setExpand]= useState(false);
  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      // Update windowHeight when the window's dimensions change
      // setExpand(!expand);
      const newWindowHeight = Dimensions.get('window').height;
      setViewHeight(new Animated.Value(newWindowHeight * 0.6));
    });
  }, []);

  

  const [shoePosition, setShoePosition] = useState([1, 0, 0.5]); // Initial position at top-right
  const [shoeRotation, setShoeRotation] = useState([1, -1, 0]); // Initial position at top-right
  const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
    interval: 10,
  });
  

  const handleArrowPress = () => {
    console.log("We are working.1")
    Animated.timing(viewHeight, {
        toValue: viewHeight._value === windowHeight * 0.6 ? windowHeight * 0.9 : windowHeight * 0.6,
        duration: 500,
        useNativeDriver: false,
    }).start(() => {
        setExpand(!(viewHeight._value !== windowHeight * 0.9));
    });
    console.log("We are working.12")

    if (viewHeight._value === windowHeight * 0.9) {
        setShoePosition([1, 0, 0.5]);
        setShoeRotation([1, -1, 0]);
    } else {
        setShoePosition([-1.5, 1, -1.5]);
        setShoeRotation([2, -3.1, 0]);
    }
};



  return (
    <>
    <StatusBar backgroundColor="#374760" barStyle="light-content" />
    <Animated.View  style={[styles.container, {height: viewHeight}]}>
      <View style={expand ? styles.DashTextExpanded : styles.DashText}>
      <Text style={styles.text}>Robotic Mower</Text>
  <Text style={[styles.text,{marginLeft:'-30%'}]}>• Good</Text>
      </View>
      <View>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Notification');
      }}  
      style={styles.iconNoti}>
        <Image
          source={require('../assets/noti.png')}
        />
      </TouchableOpacity>
      </View>
    {!expand && <Image
          source={require('../assets/big.png')}
          style={{position:'absolute',width:'67%',height:'67%',marginTop:'40%',right:0,resizeMode:'contain'}}  // Adjust size as needed
        />}
      {!expand &&<Image
          source={require('../assets/small.png')}
          style={{position:'absolute',width:'47%',height:'47%',marginTop:'40%',marginRight:'8%',right:0,resizeMode:'contain'}}  // Adjust size as needed
        />}

{expand && (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'center', // This will center the children horizontally
    marginTop: 120,
    marginLeft:-90,
    // Make sure the container takes the full width if not already defined elsewhere
    width: '100%',
  }}>
    {/* CircularSlider Component */}
    <CircularSlider width={250} height={250} value={75} maximumValue={100} />
    
    {/* Vertical Component with Image and Texts */}
    {/* This View will be centered horizontally within the parent View */}
    <View style={{
      alignItems: 'center', // This will center the children horizontally within this View
      justifyContent: 'center', // This will center the children vertically within this View
      // If you want the vertical component not to stretch across the screen, define a width
      width: 200,
    }}>
      <Image
        source={require('../assets/mowingtext.png')} // Replace with your image source
        style={{ marginLeft:0,width:138,height:36.48 }}
      />
      <Text style={{ textAlign: 'center' ,color:'#D9D9D9',fontSize:15,marginTop:20}}>End of Mission at  18:30</Text>
      <Text style={{ textAlign: 'center' ,color:'#D9D9D9',fontSize:15,marginTop:5}}>Area Covered Today 150 ft2</Text>
    </View>
  </View>
)}


      {expand &&   <View style={styles.mainRow}>
        
      <View style={styles.row}>
        <View style={styles.button}>
          <Button title="Smart Scheduling" color="#000" />
        </View>
        <View style={styles.button}>
          <Button title="Settings" color="#000" />
        </View>
      </View>
      {/* <View style={styles.row}>
        <View style={styles.button}>
          <Button title="History" color="#000" />
        </View>
        <View style={styles.button}>
          <Button title="Settings" color="#000" />
        </View>
      </View> */}
      </View>}
       <View>
      <TouchableOpacity  style={expand ? styles.stateIconsExpanded : styles.stateIcons}>
        <Image
          source={require('../assets/charge.png')}
            // Adjust size as needed
          
        />
        <Image
          source={require('../assets/pause.png')}
            // Adjust size as needed
          
        />
      </TouchableOpacity>
      </View>
    <Canvas >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      
      <Suspense fallback={null}>
      {/* <Shoe animatedSensor={animatedSensor} position={shoePosition} rotation={shoeRotation} /> */}
      </Suspense>
      
    </Canvas>
    {!expand && <IconRow/>}
    <TouchableOpacity onPress={handleArrowPress} style={expand ? styles.centerImageExpanded:styles.centerImage}>
        <Image
          source={require('../assets/drop.png')}
          style={{ width: 100, }}  // Adjust size as needed
        />
      </TouchableOpacity>
    </Animated.View >
    <View style={styles.Map}>
    <LawnMap boundaryPath={customPath} mowerPath={mowerPath} obstacles={obstacles} mowerLocation={customPath[0]}/>
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
    justifyContent:'center',
    height:'100%',
    backgroundColor:'#294D61',
    borderBottomLeftRadius:36,
    borderBottomRightRadius:36
    
  },
  centerImage: {
    flex: 0,
    backgroundColor: '05161A',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:50
  },
  centerImageExpanded: {
    flex: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:0
  },
  iconNoti: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 20,  // Adjust as needed

  },
  DashText:{
    top:0,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,  // Adjust as needed
    marginLeft: 20,  // Adjust as needed
  },
  DashTextExpanded:{
    top:0,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,  // Adjust as needed
    marginLeft: 120,  // Adjust as needed
  },

  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
  },
  stateIcons:{
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,  // Adjust as needed
    marginLeft: 10,  // Adjust as needed
  },
  stateIconsExpanded:{
    position: 'absolute',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 220,  
    marginLeft: 110, 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', // use 'space-between' instead of 'space-evenly'
    marginBottom: 20,  // Add space between the rows
    paddingHorizontal: 20, // Add horizontal padding to the row
  },
  button: {
    width: '50%',  // Adjust as needed
    backgroundColor: '#000',
    borderRadius: 20,  // Increase the border radius
    padding: 10, // Add padding inside the button
    fontSize:12

  },
  mainRow:{
    position:'absolute',
    bottom: 0,
    width: '100%', // take full width of the parent
    alignItems: 'center', // center children horizontally
    marginBottom:150
  },
  Car:{
    position:'absolute'
  },
  Map:{
    // position:'absolute',
    // bottom:0,
    flex:1,
    width:'100%',
    marginRight:40,
    borderStartColor:'#05161A',
    backgroundColor:'#05161A'
    
  }
});

