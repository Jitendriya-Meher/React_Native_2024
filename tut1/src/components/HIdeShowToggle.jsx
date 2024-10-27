/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import MyHide from './MyHide';

const HIdeShowToggle = () => {
  const [status, setStatus] = useState(true);

  return (
    <View>

      <Text style={{fontSize: 30}}>HIdeShowToggle</Text>

      <Button
        title="Hide"
        onPress={() => {
          setStatus(false);
        }}
      />

      <Button
        title="Show"
        onPress={() => {
          setStatus(true);
        }}
      />

      <Button
        title="Toggle"
        onPress={() => {
          setStatus(!status);
        }}
      />

      {status ? <MyHide /> : null}

    </View>
  );
};

export default HIdeShowToggle;
