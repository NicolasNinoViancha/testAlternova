import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigator, HomeNavigator } from '@src/routes';

const isLogin = true;

const App = () => (
  <NavigationContainer>
    {
      isLogin
        ? <HomeNavigator />
        : <LoginNavigator />
    }
  </NavigationContainer>
);

export default App;