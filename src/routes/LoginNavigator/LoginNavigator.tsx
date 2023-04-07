import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '@src/screens';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Login"
            options={{
                headerShown: false
            }}
            component={LoginScreen} />
    </Stack.Navigator>
);

export default LoginNavigator;