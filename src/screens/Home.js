import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedPage from './Feed';
import AddPage from './Add';
import ProfilePage from './Profile';
import SearchPage from './Search'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

export default function Home() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedPage} 
            options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name='home' style={{fontSize: 28}} />
                )
            }} />
            <Tab.Screen name="Search" component={SearchPage} 
            options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name='magnify' style={{fontSize: 28}} />
                ) 
            }} />
            <Tab.Screen name="Add" component={AddPage} 
            options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name='plus-box' style={{fontSize: 28}} />
                ) 
            }} />
            <Tab.Screen name="Profile" component={ProfilePage}
            options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name='account-circle' style={{fontSize: 28}} />
                ) 
            }} />
        </Tab.Navigator>
    )
}