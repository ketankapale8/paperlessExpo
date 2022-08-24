import { StyleSheet, Text, View , Image , Pressable} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Reliance from '../OrderList/Data/reliance1.png'
import Dmart from '../OrderList/Data/dmart1.png'
import BigBazaar from '../OrderList/Data/bigbazaar1.png';
import Spencers from '../OrderList/Data/spencers.png'
import Cantabil from '../OrderList/Data/cantabil1.jpg'
import local from '../OnboardingImgs/local.jpg'


const RestaurantItem = ({order , item , token}) => {
  
  const navigation = useNavigation();
  // console.log('orderrr',order)

  const onPress = () =>{
    navigation.navigate("Invoices" , {order , item :item })
  }

  console.log('item' ,item)

  // console.log('homescreenss' , item?.pos?.value)

    // order.posmodelId === "03a8c734-a593-4d8d-b4c0-18fc19140f17" ? Reliance : '' 
    // "171361a7-9190-48ca-b5ff-aafc203c4984"
  return (
       <>
    <Pressable onPress={onPress}
       style={{ flexDirection: "row", margin: 10, alignItems: "center" , paddingRight:3}}
    >
        <View style={styles.restaurantContainer}>
          <View style={{flex:0.5}}>
              <Image source={ (item?.pos?.value)  === "DMart" ? Dmart : 
                                  (item?.pos?.value)  === "Reliance" ? Reliance :
                                  (item?.pos?.value)  === "Spencer" ? Spencers :
                                  (item?.pos?.value) === "BigBazaar" ? BigBazaar : 
                                  item ||  (item.pos)  ===
                                  null || undefined || '' ? local : null
                                }
              style={styles.images}
            />

          </View>
        <View style={{flex:0.5 , marginTop:-90  , borderColor:'gray'}}>
          <Text style={styles.title}>{item.pos ? (item?.pos?.value) : 'Local Store'}</Text>
          <Text style={styles.subtitle}>Bill Amount : {item.amt_due}/-</Text>
          <View style={styles.rating}>
            <Text>Purchase Date : {item.createdAt}</Text>
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
      marginVertical:10,
      paddingTop:30,
      paddingBottom:30,
      borderRadius: 10,
      borderBottomColor:'green',
      color: "gray",
      marginVertical: 5,
      borderBottomColor: "lightgrey",
     borderBottomWidth: 3,
     flexDirection: "column",
    },
    images :{
      width:95,
      height:75,
      marginHorizontal: 300,
      marginRight:80,
      marginTop:10 , 
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