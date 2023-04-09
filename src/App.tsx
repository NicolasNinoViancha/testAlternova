import React, { useEffect, useState } from 'react';
//additional libraries
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
//additional components
import { ViewBackground } from '@src/components';
import { SplashScreen } from '@src/screens';
//routes
import { LoginNavigator, HomeNavigator } from '@src/routes';
//component
const App = () => {
  //states
  const [initializing, setInitializing] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>();
  const [user, setUser] = useState<any>();
  //functions
  //handle user state changes
  const onAuthStateChanged = (user: any) => {
    setTimeout(() => {
      setUser(user);
      setIsLogin(user !== null);
      if (initializing)
        setInitializing(false);
      console.log({ user });
    }, 1000);
  }
  //effects
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  //main component
  if (initializing)
    return (
      <ViewBackground>
        <SplashScreen />
      </ViewBackground>
    );
  return (
    <NavigationContainer>
      <ViewBackground>
        {
          isLogin
            ? <HomeNavigator />
            : <LoginNavigator />
        }
      </ViewBackground>
    </NavigationContainer>
  )
};

export default App;