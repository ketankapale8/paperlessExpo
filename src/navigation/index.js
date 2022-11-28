import "react-native-gesture-handler";
// import React { useEffect , useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../components/screens/HomeScreen";
import InvoiceScreen from "../components/screens/InvoicesScreen";
import ItemDetailScreen from "../components/screens/ItemDetailScreen";
import OrderDetailsPage from "../components/screens/OrderDetailsScreen";
import OnboardingScreens from "../components/screens/OnboardingScreen";
import ProfileScreen from "../components/screens/ProfileScreen";
import BotScreen from "../components/screens/BotScreen";
import CameraScreen from "../components/screens/CameraScreen";
import TrackerScreen from "../components/screens/TrackerScreen/Expenses";
import CustomDrawer from "../components/CustomDrawer/CustomDrawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RootStackScreen from "../components/screens/RootStackScreenn";
import AnalysisScreen from "../components/screens/AnalysisScreen"
import { useAuthContext } from "../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../redux/features/authSlice";
import { useSelector } from "react-redux";
import { COLORS, FONTS, SIZES, icons } from "../../constants";
import ServicesScreen from "../components/screens/ServicesScreen";
import DiscountScreen from "../components/screens/DiscountScreen";

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  // const user = JSON.parse(AsyncStorage.getItem("profile"))
  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="RootStack"
      screenOptions={{ headerShown: false , headerStyle :{ backgroundColor : '#fff', 
      shadowColor:'#ffff',
    elevation : 0} ,
      headerTintColor : '#333',
      headerTitleStyle :{
        fontWeight :'bold'
      }
    }}
    >
      {user?.result?._id ? (
        <>
          <Drawer.Screen
            name="Home"
            component={HomeTabs}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons name="home-outline" size={22} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Orders"
            component={InvoiceScreen}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons name="ios-receipt-outline" size={22} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Invoices"
            component={OrderDetailsPage}
            options={{
              headerShown: false,
              drawerIcon: ({ color }) => (
                <FontAwesome5
                  name="file-invoice-dollar"
                  size={22}
                  color={color}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Tracker"
            component={TrackerScreen}
            options={{
              headerShown: false,
              drawerIcon: ({ color }) => (
                <Ionicons name="analytics" size={22} color={color} />
              ),
            }}
          />

          {/* <Drawer.Screen
            name="Camera"
            component={CameraScreen}
            options={{
              headerShown: false,
              drawerIcon: ({ color }) => (
                <Ionicons name="analytics" size={22} color={color} />
              ),
            }}
          /> */}
        </>
      ) : (
        <>
          <Drawer.Screen
            name="RootStack"
            component={RootStackScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      shifting={false}
      labeled={true}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: COLORS.lightGray2 },
        tabBarInactiveTintColor: COLORS.gray,
        tabBarActiveTintColor: COLORS.black,
      }}
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: "#fffff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Ionicons name="home" size={24} color={COLORS.primary} />
          ),
          tabBarStyle: {},
        }}
      />
      {/* <Tab.Screen
        name="Orders"
        component={InvoiceScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome5
              name="file-invoice"
              size={24}
              color={COLORS.primary}
            />
          ),
        }}
      /> */}
      
      {/* <Tab.Screen name='Details' component={ItemDetailScreen} options={{tabBarIcon: ()=> <FontAwesome5 name="print" size={24} color="black" /> }} /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color={COLORS.primary}
            />
          ),
        }}
      />

<Tab.Screen
        name="Tracker"
        component={TrackerScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="stats-chart" size={24} color={COLORS.primary} />
          ),
        }}
      />

{/* <Tab.Screen
        name="Analysis"
        component={AnalysisScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="google-analytics"
              size={24}
              color={COLORS.primary}
            />
          ),
        }}
      /> */}

      
      <Tab.Screen
        name="Paperbot"
        component={BotScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="robot"
              size={24}
              color={COLORS.primary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarStyle: { backgroundColor: COLORS.lightGray2 },
      tabBarInactiveTintColor: COLORS.gray,
      tabBarActiveTintColor: COLORS.black,
    }}
    sceneAnimationEnabled={true}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Services" component={ServicesScreen}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false
        })}
      
      />
      <HomeStack.Screen name="DiscountScreen" component={DiscountScreen} />

      {/* <HomeStack.Screen name="Invoices" component={OrderDetailsPage} />
      <HomeStack.Screen name="Details" component={ItemDetailScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} /> */}
    </HomeStack.Navigator>
  );
};

export default RootNavigator;
