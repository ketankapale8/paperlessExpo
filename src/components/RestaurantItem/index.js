import { StyleSheet, Text, View , Image , Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const RestaurantItem = ({order}) => {
  const navigation = useNavigation()

  const onPress = () =>{
    navigation.navigate("Invoices" , {id : order.id})
  }

  return (
       <>
    <Pressable onPress={onPress}>
        <View style={styles.restaurantContainer}>
            <Image source={order.image}
             style={styles.images}
        />
        <View>
          <Text style={styles.title}>{order.Vendortitle}</Text>
          <Text style={styles.subtitle}>Bill Amount : {order.total}/-</Text>
          <View style={styles.rating}>
            <Text>Date : {order.purchaseDate}</Text>
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