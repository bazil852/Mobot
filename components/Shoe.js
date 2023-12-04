import { Canvas, useFrame, useLoader } from '@react-three/fiber/native';
import { useState,useEffect, useRef, Suspense, useLayoutEffect } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import {StatusBar,TouchableOpacity, Image,StyleSheet,View, Button ,Animated,Dimensions} from 'react-native';
import { TextureLoader } from 'expo-three';
import { useAnimatedSensor, SensorType } from 'react-native-reanimated';
import { animated, useSpring } from '@react-spring/three';


 export default function Shoe({ position,rotation }) {
    const [props, set] = useSpring(() => ({rotation:[1,0,0], position: [2, 2, 0], config: { duration: 500 } }));
  
    useEffect(() => {
      set({ position });
      set({rotation})
    }, [position]);
    const [base, normal, rough] = useLoader(TextureLoader, [
      require('../assets/Airmax/textures/BaseColor.jpg'),
      require('../assets/Airmax/textures/Normal.jpg'),
      require('../assets/Airmax/textures/Roughness.png'),
    ]);
  
    const material = useLoader(MTLLoader, require('../assets/Airmax/shoe_Material.mtl'));
  
    const obj = useLoader(
      OBJLoader,
      require('../assets/Airmax/shoe.obj'),
      (loader) => {
        material.preload();
        loader.setMaterials(material);
      }
    );
  
    const mesh = useRef();
  
    useLayoutEffect(() => {
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.map = base;
          child.material.normalMap = normal;
          child.material.roughnessMap = rough;
        }
      });
    }, [obj]);
  
  
  
    return (
      <animated.mesh ref={mesh} rotation={props.rotation} position={props.position}>
        <primitive object={obj} scale={10} />
      </animated.mesh>
    );
  }