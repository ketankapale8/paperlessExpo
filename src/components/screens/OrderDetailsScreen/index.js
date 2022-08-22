import { View, FlatList, Pressable , ActivityIndicator   } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../DishListItem/index";
// import restaurants from "../../../assets/data/restaurants.json";
import Data from '../../Data.js'
import Header from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

import { useEffect } from "react";
// import { ConsoleLogger } from "@aws-amplify/core";

const data = Data[0];



const OrderDetailsPage = ({route}) => {

 
  
  
  
  // const route = useRoute();
  const {item} = route.params;  
  const navigation = useNavigation();
  
  const order = route.params?.order;
  // const item = route.params?.item;
  // console.log('kekkeess', item)
  // console.log('ketanData....' , item)
  // console.log(id)

  const onPress = () =>{
    // navigation.navigate("Details")
  }
  // const [cart , setCart] = useState([])
  // const [cartData , setCartData] = useState([]);

  // useEffect(()=>{
    // if(cart.length === 0){
    //   <ActivityIndicator size={"large"} color="gray"/>
    // }
    // DataStore.query(CartValues).then(setCart);
   
    
    // getSpecificCartValues()
    
    // return (()=>{
    //   DataStore.query(CartValues).then(setCart)
    
    // })
    
  // },[])


  
  
  
  return (
    <View style={styles.page}>
      <Pressable
        onPress={onPress}
      >

        <FlatList
          ListHeaderComponent={() => <Header order={item} />}
          data={order}
          renderItem={({ item }) => <DishListItem items={item} />}
          keyExtractor={(item) => item.title}
        />

      </Pressable>
      <Ionicons
        onPress={() => navigation.navigate('Home')}
        name="arrow-back-circle"
        size={45}
        color="black"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default OrderDetailsPage;
