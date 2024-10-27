/* eslint-disable quotes */
/* eslint-disable eol-last */
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const data = [
    { id: 1, item: 'item1'},
    { id: 2, item: 'itme2'},
    { id: 3, item: 'item3'},
    { id: 4, item: 'itme4'},
    { id: 5, item: 'item5'},
    { id: 6, item: 'itme6'},
    { id: 7, item: 'item7'},
    { id: 8, item: 'itme8'},
    { id: 9, item: 'item9'},
    { id: 10, item: 'itme10'},
];

const Grid = () => {
  return (
    <View style={styles.mainConatiner}>
      <Text style={styles.heading}>Grid</Text>

        <ScrollView
        contentContainerStyle={styles.container}
        >
            {
                data.map((item, index) => (
                    <View key={index} style={styles.gridItem}>
                        <Text>{item.item}</Text>
                    </View>
                ))
            }
        </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
    mainConatiner:{
        flex: 1,
        backgroundColor:"#f8f9fa",
    },
    heading:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        marginVertical:20,
        color:"#000",
    },
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        textAlign:"center",
        padding:10,
        flexWrap:"wrap",
    },
    gridItem:{
        backgroundColor:"ff6f61",
        padding:20,
        marginBottom:10,
        width:"48%",
        height:100,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        color:'#fff',
        fontWeight:"700",
        textTransform:"uppercase",
    },
});

export default Grid;