import { StyleSheet, FlatList, View, Text, Image, RefreshControl , TouchableOpacity , TextInput
,ImageBackground} from "react-native";
import RestaurantItem from "../../RestaurantItem/index.js";

import Data from "../../Data.js";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "react-native-axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { SafeAreaView } from "react-native-safe-area-context";
// import { sliderData } from "../../CarousalData.js";
import Swiper from "react-native-swiper"
import { windowWidth, windowHeight } from "../../utils/utils.js";
// import Swiper from "react-native-swiper";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import {AuthContext} from '../../../contexts/AuthContext'



const HomeScreen = () => {
  const [name, getName] = useState("");
  const [email, getEmail] = useState([]);
  const [fetchData, getFetchedData] = useState([]);
  const [userData, getUserData] = useState([]);
  const [imgActive, setImgActive] = useState(0);
  const [refreshing, setisRefreshing] = useState(false);


  const {user} = useSelector((state)=> ({...state.auth}))
  // console.log('loggedInuser......' , user)
  ////
  // const {userInfo , isLoading} = useContext(AuthContext)


  const navigation = useNavigation()
  useEffect(() => {
    getData();
    fetchCartItems();
    getFetchedData()
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
    const url = "https://paperlessapi5.herokuapp.com/users/allcarts";
    axios.get(url).then((resp) => getFetchedData(resp.data));
    // getUserData(fetchData?.allCarts?.filter(item=>item.email === name.result.email))
  };

  const onRefresh = () => {
    setisRefreshing(true);
    fetchCartItems();
    setisRefreshing(false)
  };


  let items = fetchData?.allCarts?.filter(
    (item) => item?.email === user?.result?.email
  );

  // console.log(items)

  // let items1 = fetchData?.allCarts?.filter(
  //   (item) => item?.email === userInfo.result?.email
  // );
  // console.log(items1)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* <ScrollView style={{padding: 1}} 
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={onRefresh}
          />
        }
      > */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            paddingTop:10
          }}>
          <Text style={{fontSize: 16, fontFamily: 'Roboto-Medium'}}>
            Hello ,{user?.result?.email}
          </Text>
          
          <TouchableOpacity  onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../../OnboardingImgs/profile.png')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>



        <View style={styles.wrap}>
        <Swiper style={styles.wrapper} showsButtons={true}>
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
        </View> 


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
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={onRefresh}
            />
          }
          
        />
      </View>
      {/* ) :  ( */}
      {/* <View>
        <Text style={{fontSize:40 , fontWeight:'200' , display:'flex' , alignContent:'center' , paddingTop:'50px', marginTop:'50px'}}>No Cart Items</Text>
      </View> */}
      {/* ) } */}
      {/* </ScrollView> */}
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
