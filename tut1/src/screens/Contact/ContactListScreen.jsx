/* eslint-disable react/self-closing-comp */
/* eslint-disable eol-last */
import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { users } from './userContactInfo';
import ContactItems from './ContactItems';

const ContactListScreen = () => {

    const renderItems = ({item}) => (
        <ContactItems email={item.email} name={item.name}></ContactItems>
    );

  return (
    <View>
      <Text>ContactListScreen</Text>

        <FlatList
        data={users}
        renderItem={renderItems}
        keyExtractor={(item)=>(item.id)}
        ></FlatList>

    </View>
  );
};

export default ContactListScreen;