/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import Child from './Child';

const Props = () => {

    const [count, setCount] = useState();
    const [item, setItem] = useState();

  return (
    <View>
      <Text style={{
        fontSize:20,
        color: 'blue',
      }}>

        <Button title='Counter' onPress={() => {
            setCount(count+1);
        }} />

        <Child name={"Count"} count={count}></Child>

        <Button title='Item' onPress={() => {
            setItem(item+10);
        }} />

        <Child name={"Item"} count={item}></Child>


      </Text>
    </View>
  );
};

export default Props;