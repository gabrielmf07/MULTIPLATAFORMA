import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./Screens/HomeScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import StackScreen from "./Screens/StackScreen";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeStackNavigator = createNativeStackNavigator();

function MyStack () {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen 
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
            />

        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs () {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                    headerShown: false
                }}                
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Ajustes',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="brigthness-5" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation () {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
