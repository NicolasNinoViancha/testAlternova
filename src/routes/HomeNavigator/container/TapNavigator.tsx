import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, SettingsScreen } from '@src/screens';
//additional components
import { CustomTab } from '../components';

const Tab = createBottomTabNavigator();

const TapNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={props => <CustomTab {...props} />}>
            <Tab.Screen
                name="Home"
                component={HomeScreen} />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default TapNavigator;