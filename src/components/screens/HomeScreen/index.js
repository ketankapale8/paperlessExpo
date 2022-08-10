import { StyleSheet, FlatList, View , Text} from "react-native";
import RestaurantItem from "../../RestaurantItem/index.js";

import Data from '../../Data.js'
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Cart } from "../../../models/index.js";


const HomeScreen = () => {

  const [fetchData , getFetchedData] = useState([]);

  // const fetchCartData = async () =>{

  //   const results = await DataStore.query(POSModel);
  //   getFetchedData(results)
  //   console.log(results)
  //   // const results1 = await DataStore.query();

  // }

  useEffect(()=>{

    // fetchCartData()

  }, [])
  return (
    <View style={styles.page}>
      {/* <Text style={{fontSize:50 , paddingLeft:130 , paddingTop:50}}>Home</Text> */}
      <FlatList
        data={fetchData}
        renderItem={({ item }) => <RestaurantItem order={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
    backgroundColor:'light-gray'
  },
});

export default HomeScreen;
