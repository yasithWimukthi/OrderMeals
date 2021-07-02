import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';
import {RestaurantScreen} from "./src/features/restaurants/screens/restaurent.screen";
import {theme} from "./src/infrastructure/theme";
import {ThemeProvider} from "styled-components/native";

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
            <RestaurantScreen/>
        </ThemeProvider>
        <ExpoStatusBar style="auto"/>
    </>
  );
}

