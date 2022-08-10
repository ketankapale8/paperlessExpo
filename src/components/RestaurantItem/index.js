import { StyleSheet, Text, View , Image , Pressable} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Reliance from '../OrderList/Data/reliance1.png'
import Dmart from '../OrderList/Data/dmart1.png'
import BigBazaar from '../OrderList/Data/bigbazaar1.png';
import Spencers from '../OrderList/Data/spencers.png'


const RestaurantItem = ({order}) => {
  const navigation = useNavigation();
  // console.log(order)

  const onPress = () =>{
    navigation.navigate("Invoices" , {order:order })
  }

    // order.posmodelId === "03a8c734-a593-4d8d-b4c0-18fc19140f17" ? Reliance : '' 
    // "171361a7-9190-48ca-b5ff-aafc203c4984"
  return (
       <>
    <Pressable onPress={onPress}>
        <View style={styles.restaurantContainer}>
            <Image source={order.id == '03a8c734-a593-4d8d-b4c0-18fc19140f17' ? Reliance
             : order.id == '2f702111-5917-4f94-b65a-6f0502102080' ? Dmart
             : order.id == '4f46be92-14e7-4ef5-a38d-4176b94921da' ? BigBazaar
             : order.id == '171361a7-9190-48ca-b5ff-aafc203c4984' ? Spencers : null}
             style={styles.images}
        />
        <View>
          <Text style={styles.title}>{order.itemName}</Text>
          <Text style={styles.subtitle}>Bill Amount : {order.total_amt}/-</Text>
          <View style={styles.rating}>
            <Text>Date : {order.createdAt}</Text>
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
      padding:30
    },
    restaurantContainer:{
      width:'100%',
      marginVertical:10,
      paddingTop:30,
      paddingBottom:30,
      borderBottomColor:'green',
      borderRadius: 20
      
      
    },
    images :{
      width:340,
      height:190,
      marginLeft:30,
      borderRadius:20,
    },
    title:{
      fontSize:15,
      fontWeight:"bold",
      marginVertical:10
  
    },
    subtitle:{
      color:'gray'
    },
    rating:{
      display:'flex',
      alignItems:'flex-end',
      marginTop:-41,
      color:'lightgray'
    }
   
  });

export default RestaurantItem