import { useNavigation } from '@react-navigation/native';
import React from 'react';
import axios from 'react-native-axios';
import {useState , useEffect} from 'react';
import { View, Text , TouchableOpacity ,Image , FlatList , StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {COLORS , FONTS , SIZES ,  icons} from '../../../../constants'
import { useSelector } from 'react-redux';
// import styles from '../OrderDetailsScreen/styles';

const Expenses = ({}) => {
  const [currentTime , setCurrentTime] = useState('');
  const [viewMode , currentViewMode] = useState("chart");
  const [userdata , setuserData] = useState([]);
  const [selectCategory , setSelectCategory] = useState(null)
  // const [userInformation, setuserInfo] = useState([]);
  const {user} = useSelector((state) => ({...state.auth}))
  const [showMoretoggle , setShowMoreToggle] = useState(false)

  const getCartItems = () =>{
    const url = "https://paperlessapi7.herokuapp.com/users/getallusercart";
    axios.get(url)
    .then(resp=>{
      setuserData(resp.data)
    })
  }

  const getCurrentTime = () =>{
      const date = new Date().getDate();
      const month = new Date().getMonth()+1;
      const year = new Date().getFullYear();
    
      return setCurrentTime(date+'/'+ month+'/'+year)

  }
  useEffect(()=>{
    getCurrentTime();
    getCartItems();
    // getUserCartData()
  },[])

//  const getUserCartData = () =>{
//    console.log(userInfo);
   
//   }
  
  const userInfo = userdata?.allCarts?.filter((items) => items?.userEmail === user?.result?.email);

  const navigation = useNavigation();
  function renderNavbar(){
    return (
      <View
        style={{flexDirection:'row',
        height:80,
        justifyContent:'space-between',
        alignItems:'flex-end',
        backgroundColor:COLORS.white

      }}
      >
        <TouchableOpacity
          style={{justifyContent:'center'}}
          onPress={()=>navigation.navigate("Home")}
        >
          <Image
            source={icons.back_arrow}
            style={{
              width:30,
              height:30,
              tintColor: COLORS.primary
            }}

          />

          
        </TouchableOpacity>
        <TouchableOpacity
           style={{justifyContent:'flex-end'}}
           onPress={()=>navigation.navigate("Home")}
        >
          <Image
            source={icons.more}
            style={{
              width:30,
              height:30,
              tintColor: COLORS.primary
            }}

          />

          
        </TouchableOpacity>
      </View>
    )
  }

  function renderHeader (){
    return(
        <View style={{paddingHorizontal: SIZES.padding , paddingVertical: SIZES.padding ,
          backgroundColor: COLORS.white
        }}>
          <View>
            <Text style={{color: COLORS.primary, ...FONTS.h2}}>My Expenses</Text>
            <Text>Summary (Private)</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:SIZES.padding , alignItems:'center'}}>
            <View>
              <Image
                source={icons.calendar}
                style={{
                  width:20,
                  height:20,
                  tintColor: COLORS.lightBlue,
                  borderRadius:25,
                  alignItems:'center' 
                }}
              
              />
            </View>

            <View style={{marginLeft:SIZES.padding}}>
              <Text style={{color:COLORS.primary , ...FONTS.h3 ,paddin:SIZES.padding2}}>
                  {currentTime}
              </Text>
              <Text></Text>

            </View>
          </View>
        </View>
    )
  }

  function renderCategoryHeader(){
    return(
      <View style={{flexDirection:'row', padding:SIZES.padding , justifyContent:'space-between', alignItems:'center'}}>
       <View>
          <Text style={{color:COLORS.primary, ...FONTS.h3}}>CATEGORIES</Text>
          <Text style={{color:COLORS.darkgray, ...FONTS.body4}}>Total</Text>

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

  function renderCategoryList(){

    const renderItem = ({item}) =>{
      return (
        <TouchableOpacity
          style={{
            flex:1,
            flexDirection:'row',
            margin:5,
            paddingVertical:SIZES.radius,
            paddingHorizontal:SIZES.padding,
            borderRadius:5 ,
            backgroundColor:COLORS.white,
            ...styles.shadow
          }}

          onPress={()=> setSelectCategory(item)}
        >
          <Text style={{marginLeft:SIZES.base , color: COLORS.primary , ...FONTS.h4}}>{item.category}:</Text>
          <Text style={{marginLeft:SIZES.base , color: COLORS.blue , ...FONTS.h4}}>{item.itemName}</Text>

        </TouchableOpacity>
      )
    }
    return (
      <View>
         <View>
          <FlatList
              data={userInfo}
              renderItem={renderItem}
              keyExtractor={item=>`${item._id}`}
              numColumns={2}
          />

         </View>

         <TouchableOpacity
          style={{
            flexDirection:'row',
            marginVertical:SIZES.base,
            justifyContent:'center'
          }}

          onPress={()=>{
            setShowMoreToggle(!showMoretoggle)
          }}
         
         >
          <Text style={{...FONTS.body4}}>{showMoretoggle ? "LESS" : "MORE"}</Text>
          <Image
              source={icons.down_arrow} 
              style={{
                marginLeft:5,
                width:15,
                height:15,
                alignSelf:'center'
              }}         
    
    
    
    />
         </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{flex: 1 , backgroundColor: COLORS.lightGray2}}>
      {renderNavbar()}

      {renderHeader()} 
      {renderCategoryHeader()}
      <ScrollView contentContainerStyle={{paddingBottom: 60}}>
        {
           
            viewMode == "list" &&
            <View>
              {renderCategoryList()}
            </View>
           
        }

      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
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
})

export default Expenses;