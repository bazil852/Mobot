import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export default function BottomNavbar() {
  const [active, setActive] = useState("home");
  const navigation = useNavigation();

  return (
    <View style={{ 
        position: "relative", 
        bottom: 0, 
        width: windowWidth * 0.8, 
        height: 40, 
        backgroundColor: "#121212", 
        flexDirection: "row", 
        justifyContent: "space-around", 
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 30,
    }}>
        <NavbarItem 
            title="Home"
            active={active === "home"}
            onPress={() => {
                setActive("home");
                navigation.navigate("Dashboard"); // <-- Navigate to the Notification screen
            }}
            
        >
            <Image source={require('../assets/home.png')} />
        </NavbarItem>
        <NavbarItem 
            title="Maps"
            active={active === "maps"}
            onPress={() => {
                setActive("maps");
                navigation.navigate("AllMaps"); // <-- Navigate to the Notification screen
            }}
        >
            <Image source={require('../assets/maps.png')} />
        </NavbarItem>
        <NavbarItem 
            title="Notifications"
            active={active === "notifications"}
            onPress={() => {
                setActive("notifications");
                navigation.navigate("Notification"); // <-- Navigate to the Notification screen
            }}
        >
            <Image source={require('../assets/notfication.png')} />
        </NavbarItem>
        <NavbarItem 
            title="Profile"
            active={active === "profile"}
            onPress={() => setActive("profile")}
        >
            <Image source={require('../assets/profile.png')} />
        </NavbarItem>
    </View>
  );
}

function NavbarItem({ children, title, active, onPress }) {
    return (
        <TouchableOpacity 
            style={{ 
                flexDirection: active ? 'row' : 'column', 
                justifyContent: 'center',
                alignItems: 'center', 
                flex: active ? 2 : 1, 
                backgroundColor: active ? '#2C2B2B' : 'transparent',
                borderRadius: active ? 20 : 0,
                padding: active ? 10 : 0,
            }}
            onPress={onPress}
        >
            {children}
            {active && 
                <Text style={{ color: "white", marginLeft: active ? 10 : 0 }}>
                    {title}
                </Text>}
        </TouchableOpacity>
    )
}
