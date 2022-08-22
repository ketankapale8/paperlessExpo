import { View, Text, Image } from "react-native";
import styles from "./styles";
import BigBazaar from '../../OrderList/Data/bigbazaar1.png'
import Reliance from '../../OrderList/Data/reliance1.png'
import Dmart from '../../OrderList/Data/dmart1.png'
import Spencers from '../../OrderList/Data/spencers.png'
import local from '../../OnboardingImgs/local.jpg'



const OrdersHeader = ({ order }) => {
  // console.log('headeritems' , order)
  return (
    <View style={styles.page}>
      <Image source={ order?.pos?.value === "DMart" ? Dmart : 
                                order?.pos?.value  === "Reliance" ? Reliance :
                                order?.pos?.value  === "Spencer" ? Spencers :
                                order?.pos?.value  === "BigBazaar" ? BigBazaar : 
                                order || order?.pos === '' || undefined ? local : null
                              } style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.title}>{order?.pos?.value || "Local Store"}</Text>
        <Text style={styles.subtitle}>
           {order?.createdAt}
        </Text>
        <Text style={styles.menuTitle}>Item List</Text>
      </View>
    </View>
  );
};

export default OrdersHeader;