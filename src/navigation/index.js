import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from '../components/screens/HomeScreen';
import InvoiceScreen from '../components/screens/InvoicesScreen';
import ItemDetailScreen from '../components/screens/ItemDetailScreen';
import OrderDetailsPage from '../components/screens/OrderDetailsScreen';
import OnboardingScreens from '../components/screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () =>{
    return(
    <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name='Onboarding' component={OnboardingScreens} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={HomeTabs}
        />
        <Stack.Screen name='Orders' 
        component={OrderDetailsPage}
        options={{headerShown:false}}
        />
        <Stack.Screen name='Invoices' 
        component={InvoiceScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen name='Details' 
        component={ItemDetailScreen}
        options={{headerShown:false}}
        />
        
    </Stack.Navigator>
    )
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () =>{
    return(
    <Tab.Navigator 
    shifting={false}
    labeled={true}
    sceneAnimationEnabled={false}
    // activeColor="#00aea2"
    // inactiveColor="#ffff"
    barStyle={{ 
        backgroundColor: 'white' }}
    >
        <Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon: ()=> <Ionicons name="home" size={24} color="black" />}}/>
        <Tab.Screen name='Orders' component={OrderDetailsPage} options={{tabBarIcon: ()=> <FontAwesome5 name="file-invoice" size={24} color="black" /> }}/>
        <Tab.Screen name='Invoices' component={InvoiceScreen} options={{tabBarIcon: ()=> <FontAwesome5 name="receipt" size={24} color="black" /> }} />
        <Tab.Screen name='Details' component={ItemDetailScreen} options={{tabBarIcon: ()=> <FontAwesome5 name="print" size={24} color="black" /> }} />

        {/* <Tab.Screen name='Profile' component={ProfileScreen}> */}
    </Tab.Navigator>
    )
}

// const HomeStack = createNativeStackNavigator();

// const HomeStackNavigator = () =>{
//     return(
//         <HomeStack.Screen name='Orders' component={OrderDetailsPage} />
//     )
// }

export default RootNavigator;