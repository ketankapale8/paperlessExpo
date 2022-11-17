import { StyleSheet, Text, View , Image , Pressable} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Reliance from '../OrderList/Data/reliance1.png'
import Dmart from '../OrderList/Data/dmart1.png'
import BigBazaar from '../OrderList/Data/bigbazaar1.png';
import Spencers from '../OrderList/Data/spencers.png'
import Cantabil from '../OrderList/Data/cantabil1.jpg';
import local from '../OnboardingImgs/local.jpg';
import {COLORS , FONTS , SIZES ,  icons} from '../../../constants'


const RestaurantItem = ({order , item , token}) => {
  
  const navigation = useNavigation();
  // console.log('orderrr',order)

  const onPress = () =>{
    navigation.navigate("Invoices" , {order , item :item })
  }

  // console.log('item' ,item)

  // console.log('homescreenss' , item?.pos?.value)

    // order.posmodelId === "03a8c734-a593-4d8d-b4c0-18fc19140f17" ? Reliance : '' 
    // "171361a7-9190-48ca-b5ff-aafc203c4984"
  return (
       <>
    <Pressable onPress={onPress}
       style={{ 
        flexDirection: "row", 
        margin: 10, 
        alignItems: "center" , 
        paddingRight:3,

      
      }}
    >
        <View style={styles.restaurantContainer}>
          <View style={{flex:0.5}}>
              <Image source={ (item?.pos)  === "DMart" ? Dmart : 
                                  (item?.pos)  === "Reliance" ? Reliance :
                                  (item?.pos)  === "Spencer" ? Spencers :
                                  (item?.pos) === "BigBazaar" ? BigBazaar : 
                                  item ||  (item.pos)  ===
                                  null || undefined || '' ? local : null
                                }
              style={styles.images}
            />

          </View>
        <View style={{flex:0.5 , marginTop:-10  , borderColor:'gray', marginHorizontal:-250 , marginRight:100}}>
          <Text style={{color: COLORS.primary, ...FONTS.h2}}>{item.pos ? (item?.pos) : 'Local Store'}</Text>
          <Text style={{color: COLORS.darkgray, ...FONTS.h3}}>Bill Amount : {item.amt_due}/-</Text>
          <View style={{color: COLORS.primary}}>
            <Text style={{color: COLORS.darkgray, fontWeight:'120'}}>Date : {item.createdAt}</Text>
          </View>

        </View>
        </View>
    </Pressable>
         </>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:30,
      
    },
    restaurantContainer:{
      width:'100%',
      backgroundColor: '#fff',
      marginVertical:10,
      paddingTop:30,
      paddingBottom:30,
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},

      backgroundColor: COLORS.lightGray,
      flexDirection: 'row',
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 12,
      borderRadius: 6,
      marginVertical: 5,
    },
    images :{
      width:109,
      height:75,
      marginHorizontal: 270,
      marginRight:90,
      marginTop:0 , 
      borderRadius:12 
      
    },
    title:{
      fontSize:15,
      fontWeight:"bold",
      marginVertical:10,
      color:'black',
      display:'flex',
      marginBottom:10,
  
    },
    subtitle:{
      color:'gray',
      marginTop:0
    },
    rating:{
      display:'flex',
      alignItems:'flex-end',
      marginTop:5,
      marginRight:'60%',
      color:'lightgray'
    }
   
  });

export default RestaurantItem