import React from "react";
import { View, Text, Button } from 'react-native';
//additional components
import { SwitchTheme } from '@src/components';
//hooks
import { useTheme } from '@src/hooks';
//models
import { PropsScreen } from '../models';
//styles
import { styles } from '../styles';
//component
const Login = ({
    navigation
}: PropsScreen) => {
    //hooks
    const { colors } = useTheme();
    //main component
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text>Login Screen</Text>
            <SwitchTheme
                wrapper={styles.ctnSwitchTheme} />
        </View>
    );
}
export default Login;