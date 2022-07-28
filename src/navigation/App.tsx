import {AppRegistry} from 'react-native';
import React from 'react';
import {SplashPage, LoginPage, RegisterPage} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import UITab from './UITab';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'splash'} component={SplashPage} />
        <Stack.Screen name={'login'} component={LoginPage} />
        <Stack.Screen name={'register'} component={RegisterPage} />
        <Stack.Screen name={'home'} component={UITab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
