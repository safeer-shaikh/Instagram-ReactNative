import React from 'react'
import {StyleSheet, View, Text, Button, Image} from 'react-native'

export default function Landing(props) {

    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image 
                    source={require('../assets/logo.png')}
                    style={styles.logoImage} />
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
    logoView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',
    },
    logoImage:{
        width: 170,
        height: 100,
        resizeMode: 'contain',
    },
    loginBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    }
})