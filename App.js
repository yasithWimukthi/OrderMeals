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
import {
    useFonts as useOswald,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {ThemeProvider} from "styled-components/native";

import {RestaurantScreen} from "./src/features/restaurants/screens/restaurent.screen";
import {theme} from "./src/infrastructure/theme";


const isAndroid = Platform.OS === 'android';

export default function App() {

    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });

    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

  return (
    <>
        <ThemeProvider theme={theme}>
            <RestaurantScreen/>
        </ThemeProvider>
        <ExpoStatusBar style="auto"/>
    </>
  );
}

