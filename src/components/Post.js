import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Post() {
    return (
        <View style={{backgroundColor: '#ffffff',}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                <View>
                    <Image source={require('../assets/blue.png')} alt='profile' style={{width: 30, height: 30, borderRadius: 50, marginLeft: 15}}/>
                </View>
                <View style={{display: 'flex', flexDirection: 'row',}}>
                    <View>
                        <Text style={{marginLeft: 10}}>UserName</Text>
                    </View>
                    <View style={{marginLeft: '64%',}}>
                        <MaterialCommunityIcons name='dots-vertical' style={{fontSize: 18}} />
                    </View>
                </View>
            </View>
            <View>
                <Image source={require('../assets/post1.png')} alt='post' style={{width: "100%", height: 400, marginTop: 10}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                <View style={{marginLeft: 10}}>
                    <MaterialCommunityIcons name='heart' style={{fontSize: 28}} />
                </View>
                <View style={{marginLeft: 20}}>
                    <MaterialCommunityIcons name='comment' style={{fontSize: 28, borderRadius: 50}} />
                </View>
                <View style={{marginLeft: 20}}>
                    <MaterialCommunityIcons name='send-outline' style={{fontSize: 28}} />
                </View>
            </View>
        </View>
    )
}
