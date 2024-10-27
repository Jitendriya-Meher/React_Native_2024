/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Loader = () => {

    const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>

        <TouchableOpacity onPress={()=>{
            setLoading(!loading);
        }}
        style={{backgroundColor:"#ccc"}}
        >
            <Text>
                {
                    loading ? "Hide Loader" : "Show Loader"
                }
            </Text>
        </TouchableOpacity>

      {
        loading ? <ActivityIndicator
        size="large"
        color={"#4caf50"}
        /> : null
      }

    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
    },
});

export default Loader;