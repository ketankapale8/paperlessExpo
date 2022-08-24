import { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Data from '../../Data.js'
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

// import restaurants from "../../../assets/data/restaurants.json";
// const dish = restaurants[0].dishes[0];
let data = Data[0].orders
const ItemDetailScreen = () => {
  const dispatch = useDispatch();
  const {dataValues} = useSelector((state)=> ({...state.data}))
  console.log(dataValues)

  return (
    <>
    <View style={{paddingTop:130}}>
        <Text style={styles.heading}>Order Itemlist</Text>
    </View>
    <FlatList
        data={data}
        renderItem={({item})=>{
            return(
          <View style={styles.page}>
            <View style={styles.container}>
            <View >
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.description} >
                {item.desc}
              </Text>
              <View style={{paddingLeft:'75%', marginTop:-50}}>
                  <Text style={styles.price}>Rs {item.amt} /-</Text>
                  <Text style={styles.qty}> Quantity - {item.qty}</Text>
                  <Text style={styles.packof}> Pack -{item.packof}</Text>
              </View>
            </View>
            </View >
          </View>
            )
        }}
    />
    <View style={{display:'flex', flexDirection:'row' , margin:10, marginHorizontal:10 , marginVertical:-50}}>

     <Pressable
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Save Invoice (.PDF)
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Create Invoice
        </Text>
      </Pressable>
    </View>
    </>
  );
};



const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    // paddingVertical: 40, // temp fix
    marginTop:40,
    padding: 10,
  },

  
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  heading:{
    fontWeight:"500",
    fontSize:40,
    paddingLeft:'25%'
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    borderRadius:10,
    marginBottom:85,
    padding: 20,
    margin:10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  container: {
    paddingVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});

export default ItemDetailScreen;
