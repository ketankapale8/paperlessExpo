import { View, FlatList, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../DishListItem/index";
// import restaurants from "../../../assets/data/restaurants.json";
import Data from '../../Data.js'
import Header from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

const data = Data[0];

const OrderDetailsPage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;

  const onPress = () =>{
    navigation.navigate("Details")
  }
  // console.warn(id);
  return (
    <View style={styles.page}>
      <Pressable
        onPress={onPress}
      >

        <FlatList
          ListHeaderComponent={() => <Header order={data} />}
          data={data.orders}
          renderItem={({ item }) => <DishListItem dish={item} />}
          keyExtractor={(item) => item.title}
        />

      </Pressable>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="black"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default OrderDetailsPage;
