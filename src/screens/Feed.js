import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function Feed() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/logo.png')} style={styles.logoImage} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    logoImage: {
        resizeMode: 'contain',
        width: 100,
        height: 70,
        marginLeft: 20
    },
})