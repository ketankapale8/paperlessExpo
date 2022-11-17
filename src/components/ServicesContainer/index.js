import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";

import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ServicesContainer = ({}) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate("Services", {title: "Discounts"})
          }
        >
          <View style={styles.categoryIcon}>
            <Fontisto name="shopping-sale" size={25} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Discounts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate("Services", { title: "Loyalty Benefits" })
          }
        >
          <View style={styles.categoryIcon}>
            <MaterialIcons name="loyalty" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Loyalty Benefits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {
          navigation.navigate("Services", { title: "Brands" })
        }}>
          <View style={styles.categoryIcon}>
            <Octicons name="organization" size={25} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Brands</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer, { marginTop: 10 }]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {
          navigation.navigate("Services", { title: "Services" })
        }}>
          <View style={styles.categoryIcon}>
            <AntDesign name="customerservice" size={25} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {
          navigation.navigate("Services", { title: "Categories" })
        }}>
          <View style={styles.categoryIcon}>
            <Fontisto name="shopping-store" size={25} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {
          // navigation.navigate("Services", { title: "Categories" })
        }}>
          <View style={styles.categoryIcon}>
            <Entypo name="shopping-cart" size={25} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Personal Purchases</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#fdeae7" /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#de4f35",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});

export default ServicesContainer;
