import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {Searchbar} from "react-native-paper";
import {RestaurantInfo} from "../components/restaurent-info.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () =>{
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfo />
            </RestaurantListContainer>
        </SafeArea>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight
//     },
//     searchBar: {
//         padding:16,
//         backgroundColor:'white'
//     },
//     list:{
//         flex: 1,
//         padding:16,
//         backgroundColor:'red'
//     }
// });
//
