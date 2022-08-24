// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'react-native-axios';
// import React, {createContext, useEffect, useState} from 'react';
// import { useNavigation } from '@react-navigation/native';
// import {API} from '../redux/api';
// const baseURL = "https://paperless-api1.herokuapp.com"
// // import {BASE_URL} from '../config';

// export const AuthContext = createContext();

// export const AuthProvider = ({children}) => {
//   const [userInfo, setUserInfo] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [splashLoading, setSplashLoading] = useState(false);
// //   const navigation = useNavigation()

//   const register = (firstName, email, password , lastName) => {
//     setIsLoading(true);

//     axios
//       .post(`${baseURL}/users/signup`, {
//         email , 
//         password , 
//         firstName , 
//         lastName , 
//         confirm_password
//       })
//       .then(res => {
//         let userInfo = res.data;
//         setUserInfo(userInfo);
//         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//         // navigation.navigate("SignInScreen")

//         setIsLoading(false);
//         console.log(userInfo);
//       })
//       .catch(e => {
//         console.log(`register error ${e}`);
//         setIsLoading(false);
//       });
//   };

//   const login = (email, password) => {
//     setIsLoading(true);

//     axios
//       .post(`${baseURL}/users/signin`, {
//         email,
//         password,
//       })
//       .then(res => {
//         let userInfo = res.data;
//         console.log(userInfo);
//         setUserInfo(userInfo);
//         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//         setIsLoading(false);
//         // navigation.navigate("Home")
//       })
//       .catch(e => {
//         console.log(`login error ${e}`);
//         setIsLoading(false);
//       });
//   };

//   const logout = () => {
//     setIsLoading(true);

//     axios
//       .post(
//         `${baseURL}/users/logout`,
//         {},
//         {
//           headers: {Authorization: `Bearer ${userInfo.access_token}`},
//         },
//       )
//       .then(res => {
//         console.log(res.data);
//         AsyncStorage.removeItem('userInfo');
//         navigation.navigate("SplashScreen")
//         setUserInfo({});
//         setIsLoading(false);
//       })
//       .catch(e => {
//         console.log(`logout error ${e}`);
//         setIsLoading(false);
//       });
//   };

//   const isLoggedIn = async () => {
//     try {
//       setSplashLoading(true);

//       let userInfo = await AsyncStorage.getItem('userInfo');
//       userInfo = JSON.parse(userInfo);

//       if (userInfo) {
//         setUserInfo(userInfo);
//       }

//       setSplashLoading(false);
//     } catch (e) {
//       setSplashLoading(false);
//       console.log(`is logged in error ${e}`);
//     }
//   };

//   useEffect(() => {
//     isLoggedIn();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoading,
//         userInfo,
//         splashLoading,
//         register,
//         login,
//         logout,
//       }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };