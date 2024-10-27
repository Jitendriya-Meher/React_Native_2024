/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import externalStyle from '../style/style'

const Styling = () => {
  return (
    <View>

      <Text style={{
        fontSize: 20,
        backgroundColor:"black",
        color:"white",
      }}>
        Inline Styling
      </Text>

      <Text style={internalStyle.text}>
       Internal Styling
      </Text>

      <Text style={externalStyle.text}>
        External Styling
      </Text>

      <Text style={[externalStyle.text, internalStyle.text,{color:"white"}]}>
        Mix Styling
      </Text>

    </View>
  )
}

const internalStyle = StyleSheet.create({
    text:{
        backgroundColor:"red",
        fontSize: 20,
        color:"blue",
        marginVertical:10,
        padding:6,
        textAlign:"center",
        borderColor:"green",
        borderWidth:3,
    },
})

export default Styling