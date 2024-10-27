/* eslint-disable jsx-quotes */
import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const OnPress = () => {

    // let name = "";
    const [name, setName] = useState();

    const getName = () => {
        console.log("button press");
        // name = "Jitendiya";
        setName("Jiyendriya");
    }

  return (
    <View>
      <Text>
        OnPress Event - {name}
      </Text>
      <Button title='Press here...'
        onPress={getName}
      />

    </View>
  )
}

export default OnPress