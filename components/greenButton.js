import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';

import { signOut } from 'firebase/auth';

import { auth } from '../config';

export default function CustomButton({ text, onPress }) {

    let [fontsLoaded] = useFonts({
        'Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    });
    const handleLogout = () => {
        signOut(auth).catch(error => console.log('Error logging out: ', error));
      };
    if (!fontsLoaded) {
        
        return <AppLoading />;
    } else {

        return (
           
          
            <View style={styles.container}>
              <Button title='Sign Out' onPress={handleLogout} />
            </View>
            
          );
        
    }
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        borderRadius: 30,
        paddingVertical: 10,
        backgroundColor: '#00EEAA',
        elevation: 5,
        shadowColor: "#dadada",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Bold',
        fontSize: 14,
        textAlign: 'center',
        letterSpacing: 0.8,
    }
})