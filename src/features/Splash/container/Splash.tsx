import React, { useRef, useEffect } from "react";
import { View, Animated, Text, ActivityIndicator } from 'react-native';
//additional components
import { Image } from '@src/components';
//hooks
import { useTheme } from '@src/hooks';
//styles
import { styles } from '../styles';
//graphic resources
const LogoCompany = require('@src/assets/Images/logoSmallCompany.jpeg');
const LogoCompanyDark = require('@src/assets/Images/logoSmallCompanyDark.jpeg');
//component
const Splash = () => {
    //ref
    const scale = useRef(new Animated.Value(1)).current;
    const scale_total = Animated.timing(scale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
    });
    const scale_medium = Animated.timing(scale, {
        toValue: 0.8,
        duration: 1000,
        useNativeDriver: true
    });
    const secuence = Animated.sequence([scale_medium, scale_total]);
    //hooks
    const {
        isDark,
        colors
    } = useTheme();
    //effects
    useEffect(() => {
        Animated.loop(
            secuence
        ).start();
    }, [])
    //main component
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Animated.View
                style={[
                    styles.shadowIOS,
                    { transform: [{ scale }] }]}>
                <View style={[styles.ctnImage, { backgroundColor: colors.background }]}>
                    <Image
                        resizeMode={'contain'}
                        defaultSource={
                            isDark
                                ? LogoCompanyDark
                                : LogoCompany}
                        source={''} />
                </View>
            </Animated.View>
            <View style={styles.ctnText}>
                <ActivityIndicator
                    size="small"
                    color={colors.text} />
                <Text
                    style={[styles.text, { color: colors.text }]}>
                    {`Cargando...`}
                </Text>
            </View>
        </View>
    );
};

export default Splash;