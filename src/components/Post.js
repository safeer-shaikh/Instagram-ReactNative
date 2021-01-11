import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Post() {
    return (
        <View style={{backgroundColor: '#dbdbdb',}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <View>
                    <Image source={require('../assets/logo.png')} alt='profile'/>
                </View>
                <View>
                    <Text>UserName</Text>
                </View>
                <View>
                    <MaterialCommunityIcons name='dots-vertical' style={{fontSize: 18}} />
                </View>
            </View><View>
                <Image source={require('../assets/logo.png')} alt='post' style={{resizeMode: 'contain'}} />
            </View>
        </View>
    )
}
