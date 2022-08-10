import { View, Text, Image } from "react-native";
import styles from "./styles";

const OrdersHeader = ({ order }) => {
  return (
    <View style={styles.page}>
      <Image source={order.image} style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.title}>{order.name}</Text>
        <Text style={styles.subtitle}>
           &#8226; {order.updatedAt}
        </Text>
        <Text style={styles.menuTitle}>Items</Text>
      </View>
    </View>
  );
};

export default OrdersHeader;