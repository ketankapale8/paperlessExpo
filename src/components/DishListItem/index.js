import { View, Text, StyleSheet, Image, Pressable , Button, Alert} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation} from "@react-navigation/native";
import { useDispatch , useSelector } from "react-redux";
import { addTab } from "../../redux/features/dataSlice";
import axios from 'react-native-axios';
// import { setData } from "../../redux/features/datatab";

const DishListItem = ({items , order}) => {
  const {user} = useSelector((state)=>({...state.auth}))
  const dispatch = useDispatch();
  const {error , loading} = useSelector((state)=>({...state.auth}));
  // console.log('nameeeee',user)
  const navigation = useNavigation();
  const [addCart , setAddCart] = useState([{ userEmail :'',itemName : '' , category : '', price :'' , qty :''}])
  const [personalCart , setPersonalCart] = useState([]);

  useEffect(()=>{
    addDataToPersonal()
  },[])


  const addDataToPersonal  =  () =>{
    const posturl = "https://paperlessapi7.herokuapp.com/users/addusercart";
    setAddCart([{...addCart , userEmail : user?.result?.email , itemName : items.itemName ,category :items.category , price :items.price , qty:items.qty}])
    axios.post(posturl , {
      // addCart, 
      userEmail : user?.result?.email , 
      itemName : items.itemName ,
      category :items.category , 
      price :items.price , 
      qty:items.qty
    })

  }

 

  // const addToPersonalCart = (e) =>{
  //   e.preventDefault();`
  //   setPersonalCart(e.target.value)
  //   console.log('personallll')
  //   // Alert.alert('personal cart added')
  // }

  // console.log(personalCart)


  // navigation.navigate('Invoices')

  // const navigation = useNavigation();
  // const route = useRoute();
  // const items = route.params?.items;
  return (
    <Pressable
    onPress={()=>addDataToPersonal}
        // setAddCart({...addCart , itemName : items.itemName ,category :items.category , price :items.price , qty:items.qty})
        // setAddCart.push({[items.itemName , items.category , items.price ,items.qty]})
        // setAddCart(personalCart)
      
      // onPress={(e) =>addToPersonalCart(e)}
      // style={styles.container}
    >
    <View style={styles.container} >
      <View style={{ flex: 1 }} >
        <Text style={styles.name} >{items.itemName}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {items.category}
        </Text>
        {/* <View> */}

        {/* </View> */}
        <View style={{paddingLeft:'75%', marginTop:-50}}>
            <Text style={styles.price}>Rs {items.price} /-</Text>
            <Text style={styles.qty}> Quantity - {items.qty}</Text>
            {/* <Text style={styles.packof}> Pack -{dish.packof}</Text> */}
        </View>
        <Pressable
        style={styles.button}
        >
        <Text style={styles.buttonText}>
          Add
        </Text>
      </Pressable>
      </View>
      </View >
    
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
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

  button: {
    backgroundColor: "gray",
    marginTop: "auto",
    width:50,
    marginLeft:320,
    borderRadius:10,
    marginBottom:15,
    marginTop:15,
    padding: 10,
    margin:5,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 10,
  },
});

export default DishListItem;
