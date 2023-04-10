import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from '@src/screens';
import TapNavigator from './TapNavigator';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
    <Stack.Navigator
        initialRouteName="MainTap">
        <Stack.Screen
            name="Detail"
            //@ts-ignore
            component={DetailScreen} />
        <Stack.Screen
            name="MainTap"
            options={{
                headerShown: false
            }}
            component={TapNavigator} />
    </Stack.Navigator>
);

export default HomeNavigator;