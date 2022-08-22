import { StyleSheet, FlatList, View, Text, Image } from "react-native";
import RestaurantItem from "../../RestaurantItem/index.js";

import Data from "../../Data.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "react-native-axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { SafeAreaView } from "react-native-safe-area-context";
// import { sliderData } from "../../CarousalData.js";
import { windowWidth, windowHeight } from "../../utils/utils.js";
import Swiper from "react-native-swiper";
import { ScrollView } from "react-native-gesture-handler";

// import { DataStore } from "aws-amplify";
// import { Cart } from "../../../models/index.js";

const HomeScreen = () => {
  const [name, getName] = useState("");
  const [email, getEmail] = useState([]);
  const [fetchData, getFetchedData] = useState([]);
  const [userData, getUserData] = useState([]);
  const [imgActive, setImgActive] = useState(0);

  useEffect(() => {
    getData();
    fetchCartItems();
    // getUserData
    // customUserData();
  }, []);

  const getData = async () => {
    try {
      await AsyncStorage.getItem("@profile").then((resp) => {
        resp && getName(JSON.parse(resp));
        // getEmail(JSON.parse(resp.result))
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCartItems = () => {
    const url = "https://paperlessapi.herokuapp.com/users/allcarts";
    axios.get(url).then((resp) => getFetchedData(resp.data));
    // getUserData(fetchData?.allCarts?.filter(item=>item.email === name.result.email))
  };

  const onChange = (nativeEvent) => {};

  let items = fetchData?.allCarts?.filter(
    (item) => item?.email === name.result.email
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={styles.wrapper}>
      <Swiper style={styles.wrap} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Shopping from a local store</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Search for your Order</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Save your order on the go</Text>
        </View>
        <View style={styles.slide4}>
          <Text style={styles.text}>Save Paper,Go Paperless</Text>
        </View>
      </Swiper>

      {/* {items ? (  */}
      <View style={styles.page}>
        {/* <Text style={{fontSize:50 , paddingLeft:130 , paddingTop:50}}>Home</Text> */}
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <RestaurantItem order={item.invoiceData} item={item} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
        />
      </View>
      {/* ) :  ( */}
      {/* <View>
        <Text style={{fontSize:40 , fontWeight:'200' , display:'flex' , alignContent:'center' , paddingTop:'50px', marginTop:'50px'}}>No Cart Items</Text>
      </View> */}
      {/* ) } */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    backgroundColor: "light-gray",
  },
  wrap: {
    width: windowWidth,
    height: windowHeight * 0.35,
  
  },
  wrapper: {
    border: 1,
    borderEndColor: "yellow",
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "#888",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },

  slide4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBDA",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomeScreen;
