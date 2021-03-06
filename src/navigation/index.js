import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
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

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

const RootNavigator = () =>{
    return(
    <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props}/>}
    initialRouteName="Onboarding" 
    screenOptions={{ headerShown : false}}>

        <Drawer.Screen name='Onboarding' component={OnboardingScreens} options={{headerShown:false}}/>
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
         
    </Drawer.Navigator>
    )
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () =>{
    return(
    <Tab.Navigator 
    shifting={false}
    labeled={true}
    sceneAnimationEnabled={false}
    barStyle={{ 
        backgroundColor: 'white' }}
    >
        <Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon: ()=> <Ionicons name="home" size={24} color="black" />}}/>
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