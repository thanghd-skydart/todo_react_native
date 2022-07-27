/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import {
  LoginPage,
  RegisterPage,
  SplashPage,
  HomePage,
  ProductGridView,
} from './src/pages';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ProductGridView);
