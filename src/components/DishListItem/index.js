import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      // onPress={() => navigation.navigate("Details")}
      // style={styles.container}
    >
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.desc}
        </Text>
        <View style={{paddingLeft:'75%', marginTop:-50}}>
            <Text style={styles.price}>Rs {dish.amt} /-</Text>
            <Text style={styles.qty}> Quantity - {dish.qty}</Text>
            <Text style={styles.packof}> Pack -{dish.packof}</Text>
        </View>
      </View>
      </View >
    
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});

export default DishListItem;
