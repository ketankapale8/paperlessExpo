import { View, FlatList, Pressable , ActivityIndicator   } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../DishListItem/index";
// import restaurants from "../../../assets/data/restaurants.json";
import Data from '../../Data.js'
import Header from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { CartValues } from "../../../models/index.js";
import { DataStore } from "aws-amplify";
import { useEffect } from "react";
import { ConsoleLogger } from "@aws-amplify/core";

const data = Data[0];



const OrderDetailsPage = () => {
  
  
  const route = useRoute();
  const navigation = useNavigation();
  
  const order = route.params?.order;
  // console.log(id)

  const onPress = () =>{
    navigation.navigate("Details")
  }
  const [cart , setCart] = useState([])
  const [cartData , setCartData] = useState([]);
  let postModelId = cart.map(item=>item.posmodelID)
  let finalCart = cart.filter(item=>item.posmodelID === order.id)
  console.log(finalCart)
  // console.log(cartData)
  
  useEffect(()=>{
    // if(cart.length === 0){
    //   <ActivityIndicator size={"large"} color="gray"/>
    // }
    // DataStore.query(CartValues).then(setCart);
   
    
    // getSpecificCartValues()
    
    // return (()=>{
    //   DataStore.query(CartValues).then(setCart)
    
    // })
    
  },[])


  
  
  
  return (
    <View style={styles.page}>
      <Pressable
        onPress={onPress}
      >

        <FlatList
          ListHeaderComponent={() => <Header order={order} />}
          data={finalCart}
          renderItem={({ item }) => <DishListItem items={item} />}
          keyExtractor={(item) => item.title}
        />

      </Pressable>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="black"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default OrderDetailsPage;
