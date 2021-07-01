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

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
        <RestaurantScreen/>
        <ExpoStatusBar style="auto"/>
    </>
  );
}

