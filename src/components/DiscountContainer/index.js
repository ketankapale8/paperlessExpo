import { View, Text , FlatList , StyleSheet, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import  {DiscountData}  from './discount';
import { windowWidth, windowHeight } from "../../components/utils/utils.js";
import { useState } from 'react';
import {COLORS , FONTS , SIZES ,  icons} from '../../../constants'

const DiscountContainer = () => {
    const [disc , getDisc] = useState(DiscountData)
    
//  const renderItems = ({item}) =>{
//     return (
//     <TouchableOpacity
//         onPress={()=> console.log('clicked')}
//     >
//         <View style={styles.subContainer}>
//             <View style={styles.brandText}>
//                 <Text>{item?.title}</Text>

//             </View>
//             <View style={styles.brandImg}>
//                 {/* <Image source={{uri: item.brand}}
//                     style={styles.image}
//                 /> */}
//             </View>

//         </View>


//     </TouchableOpacity>
//     )

//  }
  return (
    <View >
      <FlatList
        data={disc}
        renderItem={({item})=>(
            <TouchableOpacity
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


    </TouchableOpacity>
        )}
        keyExtractor={(item, index) =>{
            index.toString()
        }}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
    },
    subContainer:{
       width : '100%',
       marginVertical:23,
       marginHorizontal:-15,
       paddingTop:30,
       paddingBottom:30,
       height:120,
       flexDirection: 'row',
       borderRadius:6,
    },
    brandText:{
        flex : 0.7,
        flexDirection:'column',
        marginHorizontal:40,
    },
    panel:{
        flex : 1,
        width : '100%',
        flexDirection: 'row',
        
        
    },
    brandImg : {
        flex : 0.3,
        marginHorizontal:25

        
    },
    discountTitle:{
            

    },
    discountDesc:{
        
    },
    img:{
        width:120,
        height:80,
        borderRadius:20
    },
   
})
export default DiscountContainer
