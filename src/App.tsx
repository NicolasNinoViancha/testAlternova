import * as React from 'react';
//additional libraries
import { NavigationContainer } from '@react-navigation/native';
//additional components
import { ViewBackground } from '@src/components';
//routes
import { LoginNavigator, HomeNavigator } from '@src/routes';
import { View } from 'react-native';

const isLogin = false;
//component
const App = () => (
  <NavigationContainer>
    <ViewBackground>
      {
        isLogin
          ? <HomeNavigator />
          : <LoginNavigator />
      }
    </ViewBackground>
  </NavigationContainer>
);

export default App;