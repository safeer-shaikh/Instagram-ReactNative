import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Home Page</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dbdbdb',
    },
    heading: {
        color: 'red',
        backgroundColor: '#ffffff',
    },
})