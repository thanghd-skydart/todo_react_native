/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import {LoginPage, RegisterPage, SplashPage, HomePage} from './src/pages';
import {name as appName} from './app.json';
// let products = [
//   {
//     productName: 'iphone 13',
//     year: 2015,
//   },
//   {
//     productName: 'iphone 11',
//     year: 2012,``
//   },
//   {
//     productName: 'iphone 12',
//     year: 2013,
//   },
//   {
//     productName: 'iphone 14',
//     year: 2014,
//   },
// ];
// AppRegistry.registerComponent(appName, () => () => (
//   <App
//     x={1}
//     y={10}
//     z={100}
//     person={{
//       name: 'Hoang Duc Thang',
//       age: 18,
//       email: 'win252810@gmail.com',
//     }}
//     products={products}
//   />
// ));
AppRegistry.registerComponent(appName, () => HomePage);
