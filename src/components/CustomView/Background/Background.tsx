import React from "react";
import { SafeAreaView, StatusBar } from 'react-native';
//hooks
import { useTheme } from '@src/hooks';
//models
import { PropsViewBackground } from './models';
//styles
import { styles } from "./styles";
//component
const ViewBackground = ({
    children
}: PropsViewBackground) => {
    //hooks
    const {
        isDark,
        colors
    } = useTheme();
    //main component
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <StatusBar
                barStyle={
                    isDark
                        ? 'light-content'
                        : 'dark-content'} />
            {children}
        </SafeAreaView>
    );
}

export default ViewBackground;