import { View, Text , Image , Pressable , Button} from 'react-native'
import {COLORS , FONTS, icons} from '../../../constants'



const InvoiceItems = ({order , totalAmt}) => {
  console.log(order)
  // console.log(total)
  
//   const navigation = useNavigation();

  return (
    <View 
   
    
    >
    {/* {order.length>0 ?  ( */}
      <>
    <View style={{marginBottom:20}}>
    <Pressable
    // onPress={() => navigation.navigate("Order", { id: order.id })}
    style={{ flexDirection: "row", margin: 10, alignItems: "center" , paddingRight:5 , marginHorizontal:20 , marginVertical:10 , paddingBottom:30}}
  >

    <View style={{display:'flex', flexDirection:'column' , flex:1 , paddingRight:5,
      padding: 10,
      backgroundColor: COLORS.lightGray,
      flexDirection: 'row',
      elevation: 12,
      borderRadius: 6,
      marginVertical: -10,
      marginTop:20
          
  }}>
        <View style={{flex:0.5}}>
            <Image
                source={order.category == "Groceries" ? icons.groceries 
                : order.category == "Beverages" ? icons.drinks 
                : order.category == "Fruits" ? icons.fruit 
                : order.category == "Shoes" ? icons.shoes 
                : icons.shopping
              }
                style={{ width: 99, height: 99 , marginHorizontal: 250 , marginBottom:-30 }}
            />

        </View>
        <View style={{flex:0.5 , marginTop:5 , marginVertical:0 , marginHorizontal:-250 , marginRight:120}}>
            <Text style={{ fontWeight: "450", fontSize: 22 , color:COLORS.primary}}>
            {order.itemName}
            </Text>
        <Text style={{ marginVertical: 5 , color:COLORS.darkgray , marginHorizontal:-2}}> {order.category}</Text>
        <Text style={{ marginVertical: 5 , marginHorizontal:-2 , color:COLORS.darkgray}}> Price: {order.price} Rs</Text>
        <Text style={{ marginVertical: 5 , marginHorizontal:-2 , ...FONTS.h4 , color:COLORS.darkgray , fontWeight:'100'}}> Ref:-{order._id}</Text>

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