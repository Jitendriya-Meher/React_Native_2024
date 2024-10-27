/* eslint-disable space-infix-ops */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log('This is useeffect hook');
  }, [score, count]);

  useEffect(() => {
    console.log('This is useeffect hook for score and count');
  }, [score, count]);

  return (
    <View>

      <Text style={{fontSize: 30}}>UseEffectHook</Text>

      <Text style={{fontSize: 30}}>Count : {count}</Text>

      <Button
        title="Count + 1"
        onPress={() => {
          setCount(count + 1);
        }}
      />

      <Text style={{fontSize: 30}}>Score : {score}</Text>

      <Button
        title="Count + 1"
        onPress={() => {
          setCount(setScore + 10);
        }}
      />

      <InfoDetails count={count} points={score} />

    </View>
  );
};

const InfoDetails = ({count,points}) => {

    useEffect(()=>{
        console.log("I am a Child Components");
    },[]);

    useEffect(()=>{
        console.log("I am a Child Components for Poits");
    },[points]);

    return(
        <View>
            <Text style={{fontSize: 30, marginBottom:30}}>
                Info Details
            </Text>
            <Text style={{fontSize: 30, marginBottom:20}}>
                Count Info : {count}
            </Text>
            <Text style={{fontSize: 30, marginBottom:20}}>
                Poinst Info : {points}
            </Text>
        </View>
    );
};

export default UseEffectHook;
