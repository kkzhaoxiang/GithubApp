/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import WelcomePage from './js/page/Welcome';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './js/navigator/AppNavigator';

const App = () => {
  return (
    <AppContainer/>
  );
};

const AppContainer = createAppContainer(AppNavigator)

export default App;
