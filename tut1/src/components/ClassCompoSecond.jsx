/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class ClassCompoSecond extends Component {

    constructor(){
        super();
        this.state = {
            myName: 'Jitendriya',
        };
    }

    updateName = () => {
        this.setState({myName:"Jitedriya Meher"});
    };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>

        <Text>
            Name : {this.state.myName}
        </Text>

        <Text>
            Age : {this.props.age}
        </Text>

        <Button title="Update Name"
        onPress={this.updateName}
        ></Button>

      </View>
    );
  }
}

export default ClassCompoSecond;
