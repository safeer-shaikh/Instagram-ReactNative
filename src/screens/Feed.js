import React from 'react'
import { useEffect,  } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Post from '../components/Post'

export default function Feed(props) {

    // useEffect(()=>{
    //         props.get_users()
    // }, [])
    
    // let user = props.current_user
    // console.log('feed activated')
    // console.log(user)

    return (
        <View style={styles.container}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
                <Image source={require('../assets/logo.png')} style={styles.logoImage} />
                <View><Text>Messenger Icon</Text></View>
            </View>
            <ScrollView>
                <Post />
            </ScrollView>
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
// const mapStateToProps = (state) => ({
//     current_user: state.current_user,
//     users: state.users
// })

// const mapDispatchToProps = (dispatch) => ({
//     get_users: ()=> dispatch(get_users())
// })

// export default connect(mapStateToProps,mapDispatchToProps)(Feed);