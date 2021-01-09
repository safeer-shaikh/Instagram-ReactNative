import React from 'react'
import {StyleSheet, View, Text, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './src/screens/Landing'
import Home from './src/screens/Home'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="Homepage" component={Home} />
        {/* <Stack.Screen name="Searchpage" component={Home} />
        <Stack.Screen name="Add" component={Home} />
        <Stack.Screen name="Profilepage" component={Home} />
        <Stack.Screen name="Chatpage" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}