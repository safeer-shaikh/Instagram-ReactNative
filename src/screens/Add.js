import React from 'react'
import { useEffect,  } from 'react'
import { View, Text, ViewBase } from 'react-native'

export default function Add(props) {

    // useEffect(()=>{
    //     props.get_users()
    // }, [])
    // console.log(user)

    return (
        <View>
            <Text>Add page</Text>
        </View>
    )
}
// const mapStateToProps = (state) => ({
//     current_user: state.current_user,
//     users: state.users
// })

// const mapDispatchToProps = (dispatch) => ({
//     get_users: ()=> dispatch(get_users())
// })

// export default connect(mapStateToProps,mapDispatchToProps)(Add);