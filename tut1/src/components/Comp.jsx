/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

const Comp = () => {

    let name = "Jitendriya Meher";

    const getAge = () => {
        return 23;
    }

  return (
    <View>
      <Text style={{
        fontSize: 20,
        color: 'red',
      }}>
        Hello, world! COMP here...
      </Text>
      <Text style={{
        color:"blue",
        fontSize: 40,
      }}>
        {name}
      </Text>
      <Text>
        {5+6}
      </Text>
      <Text>
        {getAge()}
      </Text>

    </View>
  );
};

export default Comp;
