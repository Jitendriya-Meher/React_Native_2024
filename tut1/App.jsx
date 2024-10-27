/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { View, Text, Button } from 'react-native';
import React from 'react'
import Second from './src/components/Second';

const App = () => {
  return (
    <View>
      <Text style={{
        fontSize: 30,
      }}>
        moblie app
      </Text>

      <Text style={{
        fontSize: 40,
      }}>
        moblie app
      </Text>

      <Text style={{
        fontSize: 20,
      }}>
        moblie app
      </Text>

      <Button title='Press Here' />

      <First></First>

      <Second></Second>

    </View>
  );
};

const First = () => {
  return(
    <View>
      <Text>
        hiii
      </Text>
    </View>
  )
}

export default App