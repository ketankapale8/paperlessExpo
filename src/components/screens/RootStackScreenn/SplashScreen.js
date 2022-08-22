import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animitable from 'react-native-animatable'
// import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Animitable.Image
                animation="bounceIn"
                duraton="1500"
                source={require('../../assets1/logofinal.jpg')}
                style={styles.logo}
                resizeMode="stretch"
            />

        </View>
        <Animitable.View style={styles.footer}
            animation="fadeInUpBig"
        >
            <Text style={styles.title}>Order anything. Keep it recorded!</Text>
            <Text style={styles.text}>Login to get connected</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}
            >
                <View style={styles.signIn}>
                    <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="white"
                            size={23}
                            style={{paddingTop:3}}
                        />
                </View>
            </TouchableOpacity>
        </View>
        </Animitable.View>

       </View>

  )
}

export default SplashScreen

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#8AC7DB',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        color:'white'
    },
    logo: {
        width: height_logo,
        height: height_logo,
        
    },
    title: {
        color: '#fff',
        fontSize: 30,
        marginTop:20,
        // padding:'10px',
        fontWeight: 'bold'
    },
    text: {
        color: 'black',
        paddingTop:30,
        fontSize:18,
        // paddingTop:5
    },
    button: {
        alignItems: 'flex-end',
        // marginTop: -60
    },
    signIn: {
        paddingBottom:10,
        width: 150,
        height: 40,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 50,
        borderColor:'black',
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:20
        
    }
  });
