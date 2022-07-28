import React from 'react';
import {HomePage, ProductGridView, Setting, User} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();
function UITab() {
  return (
    <Tab.Navigator
      screenOptions={route => ({
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: colors.primary,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarBackground: () => (
          <View style={{backgroundColor: colors.primary, flex: 1}}></View>
        ),
        tabBarIcon: ({focused, size, color}) => {
          let screenName = route.route.name;

          return (
            <Icon
              style={{
                paddingTop: 5,
              }}
              name={
                screenName == 'Products'
                  ? 'align-center'
                  : screenName == 'Foods'
                  ? 'accusoft'
                  : screenName == 'Settings'
                  ? 'cogs'
                  : screenName == 'Profile'
                  ? 'user'
                  : ''
              }
              size={18}
              color={focused ? 'white' : colors.inactive}></Icon>
          );
        },
      })}>
      <Tab.Screen
        name={'Products'}
        component={ProductGridView}
        options={{
          tabBarLabel: 'Products',
          tabBarLabelStyle: {
            fontSize: fontSizes.s14,
          },
        }}></Tab.Screen>
      <Tab.Screen
        name={'Foods'}
        component={HomePage}
        options={{
          tabBarLabel: 'Products',
          tabBarLabelStyle: {
            fontSize: fontSizes.s14,
          },
        }}></Tab.Screen>
      <Tab.Screen
        name={'Settings'}
        component={Setting}
        options={{
          tabBarLabel: 'Products',
          tabBarLabelStyle: {
            fontSize: fontSizes.s14,
          },
        }}></Tab.Screen>
      <Tab.Screen
        name={'Profile'}
        component={User}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontSize: fontSizes.s14,
          },
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default UITab;
