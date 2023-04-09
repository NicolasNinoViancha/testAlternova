import React from "react";
import { View } from 'react-native';
//additional libraries
import auth from '@react-native-firebase/auth';
//additional components
import { ButtonText } from '@src/components';
//hooks
import { useTheme } from '@src/hooks';
//models
import { PropsScreen } from '../models';
//styles
import { styles } from '../styles';
//component
const Settings = ({ navigation }: PropsScreen) => {
    //hooks
    const {
        colors,
    } = useTheme();
    //functions
    const handleSignOut = async () => {
        try {
            await auth().signOut();
        } catch (e) {
            const error = e as any,
                message = error.code as any;
            console.log({
                process: 'handleSignOut',
                error: message
            })
        }
    }
    //main component
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <ButtonText
                text="Cerrar Sesion"
                onPress={handleSignOut} />
        </View>
    );
}
export default Settings;