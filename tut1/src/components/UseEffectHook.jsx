/* eslint-disable space-infix-ops */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("This is useeffect hook");
    },[]);

  return (
    <View>
    
      <Text style={{fontSize:30}}>UseEffectHook</Text>

      <Text style={{fontSize:30}}>
        Count : {count}
      </Text>

        <Button title='Count + 1'
        onPress={()=>{
            setCount(count+1);
        }}
        />

    </View>
  );
};

export default UseEffectHook;