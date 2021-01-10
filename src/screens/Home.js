import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedPage from './Feed';
import AddPage from './Add';
import ProfilePage from './Profile';

const Tab = createBottomTabNavigator();

export default function Home() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedPage} />
            <Tab.Screen name="Add" component={AddPage} />
            <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
    )
}