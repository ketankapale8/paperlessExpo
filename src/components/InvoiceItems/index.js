import { View, Text , Image , Pressable} from 'react-native'



const InvoiceItems = ({order , totalAmt}) => {
  console.log(order)
  // console.log(total)
  
//   const navigation = useNavigation();

  return (
    <View>
    <Pressable
    // onPress={() => navigation.navigate("Order", { id: order.id })}
    style={{ flexDirection: "row", margin: 10, alignItems: "center" , paddingRight:5}}
  >

    <View style={{display:'flex', flexDirection:'column' , flex:1 , paddingRight:5}}>
        <View style={{flex:0.5}}>
            <Image
                source={order.image}
                style={{ width: 119, height: 75, marginHorizontal: 300 , marginTop:30 , borderRadius:20  }}
            />

        </View>
        <View style={{flex:0.5 , marginTop:-70}}>
            <Text style={{ fontWeight: "600", fontSize: 26 , color:'black', display:'flex'}}>
            {order.itemName}
            </Text>
        <Text style={{ marginVertical: 5 }}> {order.category}</Text>
        <Text style={{ marginVertical: 5 }}> Price: {order.price} Rs</Text>
        

        <Text> Reference Id-{order._id} </Text>

        </View>
    </View>


  </Pressable>

  
  </View>
    
  )
}

export default InvoiceItems;