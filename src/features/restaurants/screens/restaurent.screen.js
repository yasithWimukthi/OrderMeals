import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {Searchbar} from "react-native-paper";

export const RestaurantScreen = () =>{
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchBar}>
                <Searchbar />
            </View>
            <View style={styles.list}>
                <Text>list</Text>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    searchBar: {
        padding:16,
        backgroundColor:'white'
    },
    list:{
        flex: 1,
        padding:16,
        backgroundColor:'red'
    }
});

