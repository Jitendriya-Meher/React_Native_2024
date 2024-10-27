/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-quotes */
import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {

    const [name,setName] = useState("");

  return (
    <View>
      <Text>
        Inpuut Text
      </Text>

      <Text>
        UserName : {name}
      </Text>

      <TextInput style={{
        fontSize:20,
        borderWidth:2,
        color:"green"
      }}
      placeholder='Enter Your Name'
      value={name}
      onChange={(data) => {
        setName(data);
      }}
      ></TextInput>

      <Button title='Clear Name' onPress={()=>{
        setName("");
      }}></Button>

    </View>
  )
}

export default InputText