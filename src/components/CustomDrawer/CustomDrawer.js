import { View, Text, ImageBackground , Image, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';
import React, { useState , useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage  from '@react-native-async-storage/async-storage'
import { setLogout } from '../../redux/features/authSlice';
import { useSelector , useDispatch } from 'react-redux';
import * as Sharing from 'expo-sharing';

const CustomDrawer = (props) => {
  const dispatched = useDispatch();
  const navigation = useNavigation();
    const [name , getName] = useState([]);
    const {user} = useSelector((state)=> ({...state.auth}))
    console.log(user)
    
    // const [login ,setloginResponse] = useState([])
    useEffect(()=>{
      getDatas()
    },[]) 

  const getDatas =  () =>{
    try{
       AsyncStorage.getItem('@profile')
        .then(resp=>{
          //  setloginResponse(JSON.parse(resp))
           resp ? getName(JSON.parse(resp)) : getName('')
        })

    }catch(err){
      console.log(err)
    }
  }




  const handleLogout = () =>{
    dispatched(setLogout())
    navigation.navigate('SignInScreen')
  }

  // const myCustomShare = async() => {
  //   const shareOptions = {
  //     message: 'Get all your orders on Paperless App. Earn rewards and loyalty points on the fly. Download the app!',
  //     // url: files.appLogo,
  //     // urls: [files.image1, files.image2]
  //   }

  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //     // console.log(JSON.stringify(ShareResponse));
  //   } catch(error) {
  //     console.log('Error => ', error);
  //   }
  // };


  // console.log(login.result.name)

  // console.log(name.length>0 ? name.result.name : '')

  
  // console.log(login.result.map(item=>item.name))
  // console.log(name)

  // const addName = () =>{
    // if(login.length>0){
    //     getName(login.result.name)
    // }

  // }

  // useEffect(()=>{
    // getData()
  // },[])
  
    // const [name , getName] = useState('')
    // const user = AsyncStorage.getItem(('profile'))
    // getName(user);


    // console.log(name)
    // const {user} = useSelector((state)=> ({...state.auth}));

    // console.log(user)
//    const getData = async () =>{
//     try{
//         const user = await JSON.parse(AsyncStorage.getItem("profile"))
//         console.log(user)


//     }catch(err){
//         console.log(err)
//     }
//    }
// console.log(name.result.name)
//    getData()

// {name && name.result.name}
    
  return (
      <View style={{flex:1}}>
      <DrawerContentScrollView {...props} 
      contentContainerStyle={{backgroundColor:'white'}}>
          <ImageBackground style={{backgroundColor:'white' , padding:40}}>
              <Image 
                source={require('../OnboardingImgs/profile.png')}
                style={{height:60 , width:60 , borderRadius:40 , marginTop:10 , marginLeft:55}}
              />
              <Text style={{paddingTop:20, paddingLeft:50, fontSize:12}}>{(user?.result?.name) ? (user.result.name) : ''}</Text>
              <Text style={{paddingTop:20, paddingLeft:20, fontSize:12}}>{(user?.result?.email) ? (user.result.email) : ''}</Text>
              
              {/* <Text style={{paddingTop:20, paddingLeft:30, fontSize:12}}>Order Count : 20</Text> */}
          </ImageBackground>
          <DrawerItemList style={{padding:30}} {...props}/>
         

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>₹140.50</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Orders</Caption>
          </View>
      </View>
      
      </DrawerContentScrollView>
      


      <View style={{padding:20 , borderTopWidth:1 , borderTopColor:'#ccc'}}>
          <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
              <View style={{display:'flex', flexDirection:'row'}}>
                    <FontAwesome name="sign-out" size={24} color="black" />
                    <Text onPress={handleLogout} style={{paddingLeft:25, marginBottom:-10}}>SignOut</Text>
              </View>
          </TouchableOpacity>
      </View>
      </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    marginTop:150,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
})