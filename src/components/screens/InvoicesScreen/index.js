import { View, Text, FlatList } from "react-native";

import InvoiceItems from "../../InvoiceItems/index"
import OrdersData from "../../Orders.js";

const InvoiceScreen = () => {
  return (
    <>
    <View style={{paddingTop:100}}>
        <Text style={{fontSize:50 , paddingLeft:100}}>All Orders</Text>
    </View>
    <View style={{ flex: 1, width: "100%", paddingTop: 50 }}>
      <FlatList
        data={OrdersData}
        renderItem={({ item }) => <InvoiceItems order={item} />}
      />
    </View>
    </>
  );
};

export default InvoiceScreen;