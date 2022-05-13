import { StyleSheet, FlatList, View } from "react-native";
import RestaurantItem from "../../RestaurantItem/index.js";

import Data from '../../Data.js'


const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={Data}
        renderItem={({ item }) => <RestaurantItem order={item} />}
        showsVerticalScrollIndicator={false}
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
