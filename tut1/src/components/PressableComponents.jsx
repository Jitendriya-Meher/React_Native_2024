/* eslint-disable quotes */
/* eslint-disable eol-last */
import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const PressableComponents = () => {

    const handleOnPress = () => {
        console.log("OnPress handler");
    };

    const handleOnPressIn = () => {
        console.log("OnPressIn handler");
    };

    const handleOnPressOut = () => {
        console.log("OnPressIn handler");
    };

    const handleLongPress = () => {
        // by default 5000ms
        console.log("OnPressIn handler");
    };

  return (
    <View style={styles.container}>
      <Text>PressableComponents</Text>

        <Pressable
        style={styles.button}
        onPress={handleOnPress}
        onPressIn={handleOnPressIn}
        onPressOut={handleOnPressOut}
        onLongPress={handleLongPress}
        delayLongPress={3000}
        >
            <Text style={styles.buttonText}>
                Press Me...
            </Text>
        </Pressable>

    </View>
  );
};

export default PressableComponents;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ccc",
    },
    button:{
        padding:20,
        borderRadius:5,
        backgroundColor:"#007bff",
    },
    buttonText:{
        fontSize:18,
        color:"#fff",
    }
});