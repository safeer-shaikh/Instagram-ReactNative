import React from 'react'
import { View, Text, TextInput  } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Search() {
    return (
        <View style={{backgroundColor: '#ffffff', flex: 1,}}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                <MaterialCommunityIcons name='magnify' style={{fontSize: 28,}} />
                <TextInput placeholder='Search' style={{backgroundColor: '#dbdbdb', width: '80%', marginLeft: 20, borderRadius: 20,}} />
            </View>
        </View>
    )
}
