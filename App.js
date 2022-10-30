import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList , Image} from 'react-native';
import {NavigationContainer ,DefaultTheme} from '@react-navigation/native'
import RootNavigator from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {useFonts} from "expo-font"
// import styles from './src/components/screens/OrderDetailsScreen/styles';

// import {AuthProvider} from './src/contexts/AuthContext'

const theme = {
  ...DefaultTheme,
  color :{
    ...DefaultTheme.colors,
    border : "transparent"
  }
}

function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    // 'Roboto-Bold' : require('./assets/fonts/Roboto-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }




  return (
    <Provider store={store}>
    <NavigationContainer theme={theme} style={styles.container}>
        <RootNavigator/>
        <StatusBar style='light'/>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  fontFamily : 'Roboto-Light'
})

export default App;

{/* <Provider store={store}></Provider> */}  ///commented code for Provider
