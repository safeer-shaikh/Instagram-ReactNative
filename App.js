import React from 'react'
import {StyleSheet, View, Text, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './src/screens/Landing'
import Home from './src/screens/Home'
// import * as firebase from 'firebase'

// var firebaseConfig = {
//   apiKey: "AIzaSyAVNrle6uPrniYPdwpfUFLFJ6IaOnXhY2A",
//   authDomain: "instagram-clone-d2620.firebaseapp.com",
//   databaseURL: "https://instagram-clone-d2620.firebaseio.com",
//   projectId: "instagram-clone-d2620",
//   storageBucket: "instagram-clone-d2620.appspot.com",
//   messagingSenderId: "576788378688",
//   appId: "1:576788378688:web:b9c6b5cb74386dc0ea9ba5",
//   measurementId: "G-9P8ESQC2B9"
// };
// firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="Homepage" component={Home} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Searchpage" component={Home} />
        <Stack.Screen name="Add" component={Home} />
        <Stack.Screen name="Profilepage" component={Home} />
        <Stack.Screen name="Chatpage" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}