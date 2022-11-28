import { StyleSheet, FlatList, View, Text, Image, RefreshControl , TouchableOpacity , TextInput
,ImageBackground} from "react-native";
import RestaurantItem from "../../RestaurantItem/index.js";
import {COLORS , FONTS , SIZES ,  icons} from '../../../../constants';



import Data from "../../Data.js";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "react-native-axios";
// import {COLORS , FONTS , SIZES ,  icons} from '../../../../constants'

import AsyncStorage from "@react-native-async-storage/async-storage";

import { SafeAreaView } from "react-native-safe-area-context";
// import { sliderData } from "../../CarousalData.js";
import Swiper from "react-native-swiper"
import { windowWidth, windowHeight } from "../../utils/utils.js";
// import Swiper from "react-native-swiper";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DiscountContainer from "../../DiscountContainer/index.js";
import DiscountSwiper from "../../DiscountContainer/DiscountSwiper.js";
import ServicesContainer from "../../ServicesContainer/index.js";
// import {AuthContext} from '../../../contexts/AuthContext'



const HomeScreen = () => {
  const [name, getName] = useState("");
  const [email, getEmail] = useState([]);
  const [fetchData, getFetchedData] = useState([]);
  const [userData, getUserData] = useState([]);
  const [imgActive, setImgActive] = useState(0);
  const [refreshing, setisRefreshing] = useState(false);
  const [viewMode , currentViewMode] = useState("chart");
  const [currentView , setCurrent] = useState('Discounts');


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

  function renderCategoryHeader(){
    return(
      <View style={{flexDirection:'row', padding:SIZES.padding , justifyContent:'space-between', alignItems:'center'}}>
       <View>
          <Text style={{color:COLORS.primary, ...FONTS.h3}}>{viewMode == "chart" ? currentView.toUpperCase() : "RECENT ORDERS"}</Text>

       </View>
       <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          style={{
            alignContent:"center",
            justifyContent:'center',
            height:50, 
            width:50,
            backgroundColor: viewMode == "chart" ? COLORS.secondary : null,
            borderRadius:25
          }}

          onPress={()=> currentViewMode("chart")}
        >  
          <Image
            source={icons.chart}
            resizeMode="contain"
            style={{
              width:20,
              height:20,
              marginHorizontal:15,
              justifyContent:'center',
              alignItems:'center',
              tintColor : viewMode == "chart" ? COLORS.white : COLORS.darkgray
              // backgroundColor: COLORS.secondary 
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignContent:"center",
            justifyContent:'center',
            height:50,
            width:50,
            borderRadius:25,
            backgroundColor: viewMode == "list" ? COLORS.secondary : null,

          }}

          onPress={()=> currentViewMode("list")}
        >  
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{
              width:30,
              height:25,
              marginHorizontal:10,
              justifyContent:'center',
              alignItems:'center',
              tintColor : viewMode == "list" ? COLORS.white : COLORS.darkgray              // backgroundColor:COLORS.secondary 
            }}
          />
        </TouchableOpacity>
       </View>
      </View>
    )
  }

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
    const url = "https://paperlessapi8.herokuapp.com/users/allcarts";
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
          <Text style={{color: COLORS.primary, ...FONTS.h2 , marginLeft:50 }}>
               Hello , {user?.result?.name}
          </Text>
          
          <TouchableOpacity  onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../../OnboardingImgs/profile.png')}
              style={{width: 35, height: 35,marginRight:20}}
              imageStyle={{borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>

        {/* <View style={styles.wrap}>
        <Swiper style={styles.wrapper}
          autoplay
          horizontal={false}
        showsButtons={false}>
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
        </View>  */}
        <View>
          <ServicesContainer/>
        </View>
        <View style={{width:'96%' , marginLeft:'5%', marginRight:'5%', height:90}}>
          {renderCategoryHeader()}
        </View>
        
        <ScrollView contentContainerStyle={{paddingBottom: 60}}>
        {
           
            viewMode == "list" &&
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
           
        }{
          viewMode == "chart" &&
          <View>
            <DiscountContainer/>
          </View>
        }

      </ScrollView>
    
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    marginVertical:20,
    // backgroundColor: "light-gray",
    flex:1,
    flexDirection:'row',
 
  },
  wrap: {
    width: windowWidth,
    height: windowHeight * 0.25,
  
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
  shadow:{
    shadowColor: "#0000",
    shadowOffset:{
     width:2,
     height:2
    },
    shadowOpacity : 0.25,
    shadowRadius: 3.84,
    elevation : 3
 }
});

export default HomeScreen;
