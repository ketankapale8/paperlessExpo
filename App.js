import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList , Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from './src/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native/';

Amplify.configure(config)

function App() {
  return (
    <NavigationContainer>
        <RootNavigator/>
        <StatusBar style='light'/>
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
