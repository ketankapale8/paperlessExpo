import { View, Text , StyleSheet , Image ,  } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.profileContainer}>
      <Text>ProfileScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    profileContainer:{
        paddingTop:150,
        margin:20,
        alignContent:'center',
        justifyContent:'center',
        display:'flex',
        flexDirection:'row',
        height:'80%'

    }
})

export default ProfileScreen