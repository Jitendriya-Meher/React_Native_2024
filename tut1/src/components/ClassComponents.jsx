/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-extra-semi */
/* eslint-disable eol-last */

// rnce

import { View, Text } from 'react-native';
import React, { Component } from 'react';
import ClassCompoSecond from './ClassCompoSecond';

class ClassComponents extends Component {

    render(){

        const age = 22;

        return(
            <View>
                <Text style={{fontSize:30}}>Class Components</Text>
                <ClassCompoSecond age={age}></ClassCompoSecond>
            </View>
        );
    };

};

export default ClassComponents;