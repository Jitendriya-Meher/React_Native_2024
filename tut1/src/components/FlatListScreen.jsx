/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable semi */
import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react';

const data = [
    {
        id:1,
        title:"Item 1",
    },
    {
        id:2,
        title:"Item 2",
    },
    {
        id:3,
        title:"Item 3",
    },
    {
        id:4,
        title:"Item 4",
    },
    {
        id:5,
        title:"Item 5",
    },
    {
        id:6,
        title:"Item 6",
    },
]

const FlatListScreen = () => {

    const renderItem = ({item}) => {
        return(
            <View>
                <Text
                style={{
                    color:"gray",
                    backgroundColor:"pink",
                    padding:10,
                }}
                >{item.title}</Text>
            </View>
        )
    }

  return (
    <View>
      <Text>FlatListScreen</Text>

      <FlatList 
      data={data}
      renderItem={renderItem}
      keyExtractor={(item)=>(item.id)}
      contentContainerStyle={styles.container}
      ></FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"bray",
    },
})

export default FlatListScreen;