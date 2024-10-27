/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { View, Text, Button } from 'react-native';
import React from 'react'
import Second from './src/components/Second';
import Comp from './src/components/Comp';
import OnPress from './src/components/OnPress';
import Props from './src/components/Props';
import InputText from './src/components/InputText';
import Styling from './src/components/Styling';
import FlatListScreen from './src/components/FlatListScreen';
import SectionListScreen from './src/components/SectionListScreen';
import LoginForm from './src/components/LoginForm';
import ContactListScreen from './src/screens/Contact/ContactListScreen';
import Grid from './src/components/Grid';
import ClassComponents from './src/components/ClassComponents';
import UseEffectHook from './src/components/UseEffectHook';
import HIdeShowToggle from './src/components/HIdeShowToggle';

const App = () => {
  return (
    <View style={{flex:1}}>
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

      <Comp></Comp>

      <First></First>

      <Second></Second>

      <OnPress></OnPress>

      <Props></Props>

      <InputText></InputText>

      <Styling></Styling>

      <FlatListScreen></FlatListScreen>

      <SectionListScreen></SectionListScreen>

      <LoginForm></LoginForm>

      <ContactListScreen></ContactListScreen>

      <Grid></Grid>

      <ClassComponents></ClassComponents>

      <UseEffectHook></UseEffectHook>

      <HIdeShowToggle></HIdeShowToggle>

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