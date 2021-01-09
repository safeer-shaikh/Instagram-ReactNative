import React from 'react'
import {StyleSheet, View, Text, Button, Image} from 'react-native'

export default function Landing(props) {

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')} />
            </View>
            <View style={styles.loginBtn}>
                <Button 
                    title='Login with Facebook'
                    onPress={()=> props.navigation.navigate('Homepage')} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '60%'
    },
    loginBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    }
})