import { View, Text, ImageBackground , Image} from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import {Auth} from 'aws-amplify'

const CustomDrawer = (props) => {
  return (
      <View style={{flex:1}}>
      <DrawerContentScrollView {...props} 
      contentContainerStyle={{backgroundColor:'white'}}>
          <ImageBackground style={{backgroundColor:'white' , padding:40}}>
              <Image 
                source={require('../OnboardingImgs/profile.png')}
                style={{height:60 , width:60 , borderRadius:40 , marginTop:10 , marginLeft:55}}
              />
              <Text style={{paddingTop:20, paddingLeft:20, fontSize:25}}>Ketan Kapale</Text>
              <Text style={{paddingTop:20, paddingLeft:30, fontSize:15}}>Order Count : 20</Text>
          </ImageBackground>
          <DrawerItemList style={{padding:30}} {...props}/>
      </DrawerContentScrollView>
      <View style={{padding:20 , borderTopWidth:1 , borderTopColor:'#ccc'}}>
          <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
              <View style={{display:'flex', flexDirection:'row'}}>
                    <FontAwesome name="sign-out" size={24} color="black" />
                    <Text onPress={()=> Auth.signOut()} style={{paddingLeft:25, marginBottom:-10}}>SignOut</Text>
              </View>
          </TouchableOpacity>
      </View>
      </View>
  )
}

export default CustomDrawer