import 'react-native-gesture-handler';
// import React { useEffect , useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../components/screens/HomeScreen';
import InvoiceScreen from '../components/screens/InvoicesScreen';
import ItemDetailScreen from '../components/screens/ItemDetailScreen';
import OrderDetailsPage from '../components/screens/OrderDetailsScreen';
import OnboardingScreens from '../components/screens/OnboardingScreen';
import ProfileScreen from '../components/screens/ProfileScreen';
import Settings from '../components/screens/SettingsScreen/Settings';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootStackScreen from '../components/screens/RootStackScreenn';
import { useAuthContext } from '../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from '../redux/features/authSlice';
import { useSelector } from "react-redux";

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

const RootNavigator = () =>{
    const {user} = useSelector((state)=> ({...state.auth}))
    const dispatch = useDispatch();
    // const user = JSON.parse(AsyncStorage.getItem("profile"))
    useEffect(()=>{
        dispatch(setUser(user))
    },[])
    // const {dbUser} = useAuthContext()
    // const [isFirstLaunch , setisFirstLaunch] = useState(null)
    
    // useEffect(()=>{
    //     AsyncStorage.getItem('alreadyLaunched').then(value=>{
    //         if(value == null){
    //             AsyncStorage.setItem('alreadyLaunched' , 'true');
    //             setisFirstLaunch(true)
    //         }else{
    //             setisFirstLaunch(false)
    //         }
    //     })
    // }, []) 

    
    return(
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props}/>}
    initialRouteName="RootStack" 
    screenOptions={{ headerShown : false}}>
        
        

        { user?.result?._id ? (
            <>
            <Drawer.Screen name='Home' component={HomeTabs}
        options={{
            drawerIcon : ({color}) => (
                <Ionicons name='home-outline' size={22} color={color} />
            )
             }}
           />
         <Drawer.Screen name='Orders' 
        component={InvoiceScreen}
        options={{
            drawerIcon : ({color}) => (
                <Ionicons name='ios-receipt-outline' size={22} color={color} />
                )
            }}
            />
            <Drawer.Screen name='Invoices' 
        component={OrderDetailsPage}
        
        options={{headerShown:false , drawerIcon : ({color}) => (
            <FontAwesome5 name='file-invoice-dollar' size={22} color={color} />
            )}}
            />
        <Drawer.Screen name='Details' 
        component={ItemDetailScreen}
        options={{headerShown:false , drawerIcon : ({color}) => (
            <FontAwesome5 name='receipt' size={22} color={color} />
            )}}
        />
        <Drawer.Screen name='Settings' 
        component={Settings}
        options={{headerShown:false , drawerIcon : ({color}) => (
            <Ionicons name='settings' size={22} color={color} />
            )}}
            />
            </>
            ) : (
                <>
                <Drawer.Screen name='RootStack' component={RootStackScreen} options={{headerShown:false}}/>
                </>
                
                )
            }
                
        </Drawer.Navigator>
    )
};

const Tab = createBottomTabNavigator();

const HomeTabs = () =>{
    
    return(
    <Tab.Navigator 
    shifting={false}
    labeled={true}
    screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
        // tabBarStyle: {backgroundColor: 'lightgrey'},
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: 'yellow',
    }}
    sceneAnimationEnabled={true}
    
    barStyle={{ 
        backgroundColor: '#fffff' }}
    >
        <Tab.Screen name='Home' component={HomeScreen} options={{  tabBarIcon: ()=> <Ionicons name="home" size={24} color="black"/> ,  tabBarStyle: {
          },}}/>
        <Tab.Screen name='Orders' component={InvoiceScreen} options={{tabBarIcon: ()=> <FontAwesome5 name="file-invoice" size={24} color="black" /> }}/>
        {/* <Tab.Screen name='Invoices' component={OrderDetailsPage} options={{tabBarIcon: ()=> <FontAwesome5 name="receipt" size={24} color="black" /> }} /> */}
        {/* <Tab.Screen name='Details' component={ItemDetailScreen} options={{tabBarIcon: ()=> <FontAwesome5 name="print" size={24} color="black" /> }} /> */}
        <Tab.Screen name='Profile' component={ProfileScreen} options={{tabBarIcon: ()=> <MaterialCommunityIcons name="face-man-profile" size={24} color="black" /> }} />
    </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () =>{
    return(
        <HomeStack.Navigator>
                <HomeStack.Screen name='Orders' component={InvoiceScreen} />
                <HomeStack.Screen name='Invoices' component={OrderDetailsPage} />
                <HomeStack.Screen name='Details' component={ItemDetailScreen} />
                <HomeStack.Screen name='Profile' component={ProfileScreen} />
        </HomeStack.Navigator>

    )
}

export default RootNavigator;