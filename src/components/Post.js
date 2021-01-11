import React from 'react'
import { View, Text, Button, Image } from 'react-native'

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
                    <Text>3 dots icon</Text>
                </View>
            </View>

            <View>
                <Image source={require('../assets/logo.png')} alt='post' style={{resizeMode: 'contain'}} />
            </View>
        </View>
    )
}
