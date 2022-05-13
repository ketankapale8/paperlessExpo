import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList , Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from './src/navigation';
// import restaurants from './src/components/Data.json';
// import Data from './src/components/Data.js'
// import Orders from './src/components/OrderList/Orders.jsx';

export default function App() {
  return (
    <NavigationContainer>
        <RootNavigator/>
        <StatusBar style='light'/>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
