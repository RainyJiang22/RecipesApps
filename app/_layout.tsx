// import {Stack} from 'expo-router/stack';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "@/app/index";
import {Text, View} from "react-native";
import styles from "@/app/styles";
import Apps from "./navigatetest"



export default function Layout() {
    return Apps()
}
