import { View, Text, FlatList ,RefreshControl, Pressable , StyleSheet , Button , TouchableHighlight} from "react-native";
import InvoiceItems from "../../InvoiceItems/index"
import OrdersData from "../../Orders.js";
import axios from 'react-native-axios';
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { useEffect , useState } from "react";
import { useSelector } from "react-redux";
// import RNHTMLtoPDF from 'react-native-html-to-pdf'


const InvoiceScreen = () => {
  const navigation = useNavigation();
  const [cartData ,setcartData] = useState([]);
  const [refreshing, setisRefreshing] = useState(false);

  const {user} = useSelector((state) => ({...state.auth}))

  useEffect(()=>{
    getCartItems();
  },[])

  // const createPDF = async () =>{
  //   let options ={
  //     html: '<h1>PDF TEST</h1>',
  //     fileName: 'test',
  //     directory: 'Documents',
  //   }
  //   let file = await RNHTMLtoPDF.convert(options)
  //     // console.log(file.filePath);
  //     alert(file.filePath);
  // }


  const getCartItems = () =>{
    const url = "https://paperlessapi5.herokuapp.com/users/getallusercart";
    axios.get(url)
    .then(resp=>{
      setcartData(resp.data)
    })
  }

  const onRefresh = () => {
    setisRefreshing(true);
    getCartItems()
    // fetchCartItems();
    setisRefreshing(false)
  };



  // let finalTotal = cartData?.allCarts?.price.reduce((total,acc)=>total+=acc,0)
  // console.log(finalTotal)
  // console.log('cc',cartData)

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
    <View style={{ flex: 1, width: "100%", paddingTop: 20 }}>
      <Pressable  >
        <FlatList
          data={cartData.allCarts}
          renderItem={({ item }) => <InvoiceItems order={item} totalAmt={totalAmt} />}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={onRefresh}
            />
          }
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
    <View style={{display:'flex', flexDirection:'row' , margin:10, marginHorizontal:6 , marginVertical:-10}}>
        <Pressable
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >Grand Total :{totalAmt} /-</Text>
        </Pressable>
    {/* <Pressable style={styles.button}>
    <Text
            style={styles.buttonText}
          >Save as (.pdf)</Text>

    </Pressable> */}
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
  iconContainer: {
    position: "absolute",
    top: -90,
    left: 10,
    zIndex:1,
    // backgroundColor:'black'
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    borderRadius:10,
    marginBottom:30,
    padding: 11,
    margin:115,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "400",
    fontSize: 18,
  },
})

export default InvoiceScreen;