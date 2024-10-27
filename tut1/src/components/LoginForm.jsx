/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const LoginForm = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = () => {
        console.log("email",email);
        console.log("password",password);

        setEmail("");
        setPassword("");
    };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LoginForm</Text>

        <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardAppearance='email-address'
        autoCapitalize='none'
        placeholderTextColor="#999"
        ></TextInput>

        <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={"#999"}
        secureTextEntry
        ></TextInput>

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>
                Login
            </Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        padding:20,
        paddingTop:40,
        backgroundColor:"f0f0f0",
    },
    heading:{
        fontSize:20,
        marginBottom:30,
        textAlign:"center",
        color:"#333",
        fontWeight:500,
    },
    input:{
        borderColor:"#333",
        borderWidth:1,
        marginBottom:20,
        paddingHorizontal:15,
        borderRadius:10,
        backgroundColor:"white",
        height:50,
        fontSize:"#333",
    },
    button:{
        borderRadius:10,
        alignItems:"center",
        backgroundColor:"#6200ee",
        paddingVertical:15,
    },
    buttonText:{
        color:"#fff",
        fontSize:18,
        fontWeight:'bold',
    },
});

export default LoginForm;