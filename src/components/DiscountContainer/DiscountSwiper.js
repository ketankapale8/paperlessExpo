import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import  {DiscountData}  from './discount';
import Swiper from "react-native-swiper"

const DiscountSwiper = () => {
  return (
    <View>
        <View style={styles.sliderContainer}>
            {DiscountData.map(item=>{
                    <Swiper
                        autoplay
                        horizontal={false}
                        height={200}
                        activeDotColor="#FF6347"
                    >
                    
                    <View style={styles.subContainer}>
                    <View style={styles.panel}>
                        <View style={styles.brandText}>
                                <Text style={styles.discountTitle}>{item.title}</Text>
                                <Text style={styles.discountDesc}>{item.desc}</Text>
                        </View>
                        <View style={styles.brandImg}>
                            <Image source={item.img} style={styles.img}/>
                        </View>

                    </View>
                </View>

                    </Swiper>

            })}

        </View>
    </View>
  )
}

export default DiscountSwiper

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        
      },
      subContainer:{
        width : '80%',
       marginVertical:20,
       marginHorizontal:15,
       paddingTop:30,
       paddingBottom:30,
       height:190,
       flexDirection: 'row',
       borderRadius:8,
      },
      brandText:{
        flex : 0.3,
        flexDirection:'column',
        marginHorizontal:40

    },
    panel:{
        flex : 1,
        width : '100%',
        flexDirection: 'row',
        
        
    },
    brandImg : {
        flex : 0.7,
        marginHorizontal:25

        
    },
})