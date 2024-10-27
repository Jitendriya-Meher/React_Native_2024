import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react';

const listItems = [
    {
        id:1,
        title:"fruits",
        data:[
            {
                id:11,
                name:"Apple",
            },
            {
                id:12,
                name:"Mango",
            },
            {
                id:13,
                name:"Orange",
            },
        ]
    },
    {
        id:2,
        title:"Vegitables",
        data:[
            {
                id:21,
                name:"Carrot",
            },
            {
                id:22,
                name:"Patato",
            },
        ],
    },
]

const SectionListScreen = () => {

    const renderItems = ({item}) => (
        <View style={styles.item}>
            <Text>
                {item.name}
            </Text>
        </View>
    )

    const renderHeraders = ({item}) => (
        <View style={styles.header}>
            <Text>
                {item.title}
            </Text>
        </View>
    )

  return (
    <View style={styles.container}>
      <Text>SectionListScreen</Text>

      <SectionList
      sections={listItems}
      renderItem={renderItems}
      renderSectionHeader={renderHeraders}
      keyExtractor={(item) => (item.id)}
      ></SectionList>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#f0f0f0",
        padding:15,
    },
    item:{
        backgroundColor:"yellow",
        padding:10,
        fontSize:20,
        color:"blue"
    },
    header:{
        color:"red"
    }
})

export default SectionListScreen