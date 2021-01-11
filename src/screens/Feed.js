import React from 'react'
import { useEffect,  } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Post from '../components/Post'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Feed(props) {

    // useEffect(()=>{
    //         props.get_users()
    // }, [])
    
    // let user = props.current_user
    // console.log('feed activated')
    // console.log(user)

    return (
        <View style={styles.container}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#dbdbdb',}}>
                <Image source={require('../assets/logo.png')} style={styles.logoImage} />
                <TouchableOpacity 
                    style={{marginRight: 20}}
                    onPress={()=> props.navigation.navigate('Chatpage')} >
                    <MaterialCommunityIcons
                        name='facebook-messenger' 
                        style={{fontSize: 25, color: 'gray',}} />
                </TouchableOpacity>
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