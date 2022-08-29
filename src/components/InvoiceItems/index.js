import { View, Text , Image , Pressable , Button} from 'react-native'
import {icons} from '../../../constants'



const InvoiceItems = ({order , totalAmt}) => {
  console.log(order)
  // console.log(total)
  
//   const navigation = useNavigation();

  return (
    <View>
    {/* {order.length>0 ?  ( */}
      <>
    <View style={{marginBottom:20}}>
    <Pressable
    // onPress={() => navigation.navigate("Order", { id: order.id })}
    style={{ flexDirection: "row", margin: 10, alignItems: "center" , paddingRight:5 , marginHorizontal:20 , marginVertical:10 , paddingBottom:30}}
  >

    <View style={{display:'flex', flexDirection:'column' , flex:1 , paddingRight:5}}>
        <View style={{flex:0.5}}>
            <Image
                source={order.category == "Groceries" ? icons.groceries 
                : order.category == "Beverages" ? icons.drinks 
                : order.category == "Fruits" ? icons.fruit 
                : order.category == "Shoes" ? icons.shoes 
                : icons.shopping
              }
                style={{ width: 89, height: 90, marginHorizontal: 300 , marginTop:30 }}
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
     </>
     {/* ):( */}
      <>
    {/* <View>
          <Text>No Data added to personal Cart</Text>
    </View> */}
    </>
    {/* ) */}
{/* } */}
  </View>
    
  )
}

export default InvoiceItems;