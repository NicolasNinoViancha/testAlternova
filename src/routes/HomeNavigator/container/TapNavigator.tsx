import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen } from '@src/screens';

const Tab = createBottomTabNavigator();

const TapNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen} />
            <Tab.Screen
                name="Settings"
                component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default TapNavigator;