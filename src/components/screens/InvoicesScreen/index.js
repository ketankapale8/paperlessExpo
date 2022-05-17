import { View, Text, FlatList , Pressable} from "react-native";
import InvoiceItems from "../../InvoiceItems/index"
import OrdersData from "../../Orders.js";
import { useNavigation } from "@react-navigation/native";


const InvoiceScreen = () => {
  const navigation = useNavigation();
  return (
    <>
    <View style={{paddingTop:100}}>
        <Text style={{fontSize:50 , paddingLeft:100}}>All Orders</Text>
    </View>
    <View style={{ flex: 1, width: "100%", paddingTop: 50 }}>
      <Pressable onPress={()=> navigation.navigate("Details")} >
        <FlatList
          data={OrdersData}
          renderItem={({ item }) => <InvoiceItems order={item} />}
        />
      </Pressable>
    </View>
    </>
  );
};

export default InvoiceScreen;