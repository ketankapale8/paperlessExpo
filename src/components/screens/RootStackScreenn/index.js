import React, { useContext } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import OnBoarding from "./OnboardingScreens";
// import OnBoarding from "./OnboardingScreens";
// import { AuthContext } from "../../../contexts/AuthContext";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => {
//   const { userInfo } = useContext(AuthContext);
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <>
        <RootStack.Screen name="SplashScreen" component={OnBoarding} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
      </>
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
