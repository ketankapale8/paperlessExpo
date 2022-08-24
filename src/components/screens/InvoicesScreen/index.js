import { View, Text, FlatList , Pressable , StyleSheet} from "react-native";
import InvoiceItems from "../../InvoiceItems/index"
import OrdersData from "../../Orders.js";
import axios from 'react-native-axios';
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { useEffect , useState } from "react";
import { useSelector } from "react-redux";


const InvoiceScreen = () => {
  const navigation = useNavigation();
  const [cartData ,setcartData] = useState([])
  const {user} = useSelector((state) => ({...state.auth}))

  useEffect(()=>{
    getCartItems();
  },[])

  const getCartItems = () =>{
    const url = "https://paperlessapi5.herokuapp.com/users/getallusercart";
    axios.get(url)
    .then(resp=>{
      setcartData(resp.data)
    })
  }



  // let finalTotal = cartData?.allCarts?.price.reduce((total,acc)=>total+=acc,0)
  // console.log(finalTotal)
  console.log('cc',cartData)

 let totalAmt = cartData?.allCarts?.map(item=>((item.price)).split(',').map(Number).reduce((total,acc)=>total+=acc,0)).reduce((total,acc)=>total+=acc,0)


  // console.log('cardamndhajkdhajkdhakd ',cartData)

  // let cartItems = cartData?.allCarts?.filter((items) => items?.userEmail === user?.result?.email)
  // console.log(cartItems)

  // console.log(cartItems.filter(item=>item.price))

  return (
    <>
    <View style={{paddingTop:100}}>
        <Text style={{fontSize:50 , paddingLeft:70}}>Personal Tabs</Text>
    </View>
    <View style={{ flex: 1, width: "100%", paddingTop: 50 }}>
      <Pressable onPress={()=> navigation.navigate("")} >
        <FlatList
          data={cartData.allCarts}
          renderItem={({ item }) => <InvoiceItems order={item} totalAmt={totalAmt} />}
        />
      </Pressable>
        <View>
          <Text>{totalAmt}</Text>
        </View>
      <Ionicons
        onPress={() => navigation.navigate('Home')}
        name="arrow-back-circle"
        size={45}
        color="black"
        style={styles.iconContainer}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    top: -90,
    left: 10,
    zIndex:1,
    // backgroundColor:'black'
  },
})

export default InvoiceScreen;