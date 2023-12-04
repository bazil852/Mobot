// @ts-nocheck
import { Canvas, useFrame, useLoader } from '@react-three/fiber/native';
import { useState,useEffect, useRef, Suspense, useLayoutEffect } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import {StatusBar,TouchableOpacity, Image,StyleSheet,View, Button ,Animated,Dimensions} from 'react-native';
import { TextureLoader } from 'expo-three';
import { useAnimatedSensor, SensorType } from 'react-native-reanimated';
import { animated, useSpring } from '@react-spring/three';
import Shoe from './components/Shoe';
// import AllMaps from './pages/Allmaps';
import Dashboard from './pages/Dashboard';
import BottomNavbar from './components/BottomNavbar';
import SignupScreen from './pages/SignupScreen';
import LoginScreen from './pages/LoginScreen';
import Premap from './pages/Premap';
import PairingRobots from './pages/PairingRobots';
import AssignExtendor from './pages/AssignExtendor';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DropExtender from './pages/DropExtender';
import AssignDock from './pages/AssignDock';
import DropDock from './pages/DropDock';
import Mappre from './pages/Mappre';
import MapCreation from './pages/MapCreation';
import Nogo from './pages/Nogo';
import Notification from './pages/Notification';


// import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#05161A',
  },
};


const Stack = createStackNavigator();

export default function App() {
  const [currentRoute, setCurrentRoute] = useState("SignupScreen");

  function getActiveRouteName(navigationState) {
    if (!navigationState) return null;
    const route = navigationState.routes[navigationState.index];
    if (route.routes) return getActiveRouteName(route);
    return route.name;
  }



  return (
    <NavigationContainer
    theme={MyTheme}
      onStateChange={(state) => {
        const currentScreen = getActiveRouteName(state);
        setCurrentRoute(currentScreen);
      }}
    >
      <View style={{ backgroundColor: "#05161A", flex: 1 }}>
        <StatusBar backgroundColor="#05161A" barStyle="light-content" />
        <Stack.Navigator initialRouteName="SignupScreen">
          {/* ... other Stack.Screen components ... */}
          <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name="Premap" component={Premap} options={{ headerShown: false }} />
          <Stack.Screen name="PairingRobots" component={PairingRobots} options={{ headerShown: false }} />
          <Stack.Screen name="AssignExtendor" component={AssignExtendor} options={{ headerShown: false }} />
          <Stack.Screen name="DropExtender" component={DropExtender} options={{ headerShown: false }} />
          <Stack.Screen name="AssignDock" component={AssignDock} options={{ headerShown: false }} />
          <Stack.Screen name="DropDock" component={DropDock} options={{ headerShown: false }} />
          <Stack.Screen name="Mappre" component={Mappre} options={{ headerShown: false }} />
          <Stack.Screen name="MapCreation" component={MapCreation} options={{ headerShown: false }} />
          <Stack.Screen name="Nogo" component={Nogo} options={{ headerShown: false }} />
        
          <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
          {/* <Stack.Screen name="AllMaps" component={AllMaps} options={{ headerShown: false }} /> */}
        </Stack.Navigator>

        {(currentRoute === "Dashboard" || currentRoute === "Notification" || currentRoute === "AllMaps") && <BottomNavbar  />}
      </View>
    </NavigationContainer>
  );
}



