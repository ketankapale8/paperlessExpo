import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Dimensions,
  StatusBar,
  Image
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Brands, Categories, Discounts , Loyalty_Points , Services } from "./ServicesData.js";
import Card from "../../Card/index.js";
import HeaderImageScrollView, {
  TriggeringView,
} from "react-native-image-header-scroll-view";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 55;
const MAX_HEIGHT = 350;

const ServicesScreen = () => {
  const route = useRoute();
  const val = route.params?.title;
  const [data, setData] = React.useState([]);
  console.log(data)
  React.useEffect(()=>{
      selectService()
  },[])

  const selectService = () =>{
      if(val == "Discounts"){
          setData(Discounts)
      }else if(val == "Loyalty Benefits"){
          setData(Loyalty_Points)
      }else if(val == "Brands"){
          setData(Brands)
      }else if(val == "Services"){
          setData(Services)
      }else if(val == "Categories"){
          setData(Categories)
      }
  }
 const renderData = () =>{
    return(
        data.map(item=>{
            return (
                <>
                    <View style={{flex : 1}}>
                        <Image source={item.image} style={styles.image}/>
                    </View>
                    <View style={{paddingTop:300}}>
                        <View style={styles.titleContainer} >
                            <Text style={styles.title}>{item.title}</Text>

                            <View style={{marginVertical:50}}>
                                <View style={[styles.section, styles.sectionLarge]}>
                                    <Text numberOfLines={3} style={styles.sectionContent}>{item.description}</Text>
                                </View>
                                <View>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={styles.section}>
                        <View style={styles.categories}>
                        {item.categories.map((category, index) => (
                        <View style={styles.categoryContainer} key={index}>
                        <FontAwesome name="tag" size={16} color="#fff" />
                        <Text style={styles.category}>{category}</Text>
                    </View>

                       ))}
                  </View>
                  </View>
                
                </>
            )
        })
    )
 }

  return (
      <>
       <View style={styles.container}>
        {renderData()}
       </View>
      
      </>
     );
};

export default ServicesScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: "bold",
  },
  section: {
    
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "white",
    marginHorizontal:10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionContent: {
    fontSize: 16,
    textAlign: "justify",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  categoryContainer: {
    flexDirection: "row",
    backgroundColor: "#FF6347",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
    marginVertical : -320
    
  },
  category: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 10,
  },
  titleContainer: {
    marginVertical:10,
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  imageTitle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: "white",
    fontSize: 18,
    backgroundColor: "transparent",
  },
  sectionLarge: {
    minHeight: 300,
  },
});
