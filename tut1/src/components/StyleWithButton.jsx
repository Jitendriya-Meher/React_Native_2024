/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */
import { View, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';

const StyleWithButton = () => {
  return (
    <View>
      <Text>StyleWithButton</Text>

      <Button title='Press Me' color={"red"} />

      <TouchableOpacity
      style={styles.button}
      >
        <Text style={styles.buttonText}>
            Touchable Opacity
        </Text>
      </TouchableOpacity>

      <TouchableHighlight
      style={styles.button}
      onPress={()=>{
        console.log("hello");
      }}
      underlayColor={"3a1078"}
      >
        <Text style={styles.buttonText}>
            Touchable HeightLight
        </Text>
      </TouchableHighlight>

    </View>
  );
};

const styles = StyleSheet.create({
    button:{
        margin:20,
        color:"#4e31aa",
        padding:20,
        borderRadius:25,
        elevation:5,
    },
    buttonText:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
    },
});

export default StyleWithButton;