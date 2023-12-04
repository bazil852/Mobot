import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

const Notification = () => {
    const [expand, setExpand] = useState(false); // State to handle expansion of notifications
    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);
    
    
    // ../assets/Notifications/notifications.png
    return (
        <ScrollView style={styles.container}>
            
            <Text style={styles.header}>Notification</Text>
            <Text style={styles.subHeader}>A place to see the activity of your lawn bot, notification and actions needed.</Text>
            
            {/* Sample Notification */}
            <TouchableOpacity 
            style={[styles.notification, { flexDirection: 'row', alignItems: 'center'}]} 
            onPress={() => setExpand(!expand)}>
            <Image source={require("../assets/Notifications/notifications.png")}
                style={{ marginRight: 10 }}
            ></Image>
                <View style={{ flex: 1 }}>
                <Text style={styles.title}>Mission started - 7AM</Text>
                <Text style={styles.description}>The bot successfully started its mission today!</Text>
                {expand && <Image source={require("../assets/lawn.png")} style={styles.image} />}
            </View>
            </TouchableOpacity>

            <TouchableOpacity 
            style={[styles.notification, { flexDirection: 'row', alignItems: 'center'}]} 
            onPress={() => setExpand1(!expand1)}>
            <Image source={require("../assets/Notifications/notifications.png")}
                style={{ marginRight: 10 }}
            ></Image>
                <View style={{ flex: 1 }}>
                <Text style={styles.title}>Mission started - 7AM</Text>
                <Text style={styles.description}>The bot successfully started its mission today!</Text>
                {expand1 && <Image source={require("../assets/lawn.png")} style={styles.image} />}
            </View>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.notification, { flexDirection: 'row', alignItems: 'center'}]} 
            onPress={() => setExpand2(!expand2)}>
            <Image source={require("../assets/Notifications/notifications.png")}
                style={{ marginRight: 10 }}
            ></Image>
                <View style={{ flex: 1 }}>
                <Text style={styles.title}>Mission started - 7AM</Text>
                <Text style={styles.description}>The bot successfully started its mission today!</Text>
                {expand2 && <Image source={require("../assets/lawn.png")} style={styles.image} />}
            </View>
            </TouchableOpacity>

            {/* You can add more notifications similarly */}
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#294D61',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'white'
    },
    subHeader: {
        fontSize: 16,
        marginBottom: 20,
        color: 'white',
    },
    notification: {
        backgroundColor: '#37657E',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color:'white'
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color:'#C1C6CE'
    },
    image: {
        width: '100%',
        height: 100,
    }
});

export default Notification;
