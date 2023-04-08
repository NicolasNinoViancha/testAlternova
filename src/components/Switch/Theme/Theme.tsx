import React, { useRef } from "react";
import { View, Animated, TouchableOpacity } from 'react-native';
//additional components
import Icon from '../../Icon';
//hooks
import { useTheme } from '@src/hooks';
//models
import { PropsSwitchTheme } from './models';
//styles
import { styles, SIZE_SWITCH_WIDTH, SIZE_CIRCLE, PADDING } from './styles';
//constant
import { ICONS_THEME } from './constants';
const TRANSLATION_X = SIZE_SWITCH_WIDTH - SIZE_CIRCLE - PADDING * 2;
//component
const SwitchTheme = ({ wrapper }: PropsSwitchTheme) => {
    //ref
    const translateX = useRef(new Animated.Value(0)).current;
    const changeDark = Animated.timing(translateX, {
        toValue: TRANSLATION_X,
        duration: 800,
        useNativeDriver: true
    });
    const changeLight = Animated.timing(translateX, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true
    });
    //hooks
    const {
        isDark,
        colors,
        setScheme
    } = useTheme();
    //functions
    const handleOnPress = () =>
        isDark
            ? changeLight.start(({ finished }) => { finished && setScheme() })
            : changeDark.start(({ finished }) => { finished && setScheme() });
    //main component
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[
                styles.container,
                wrapper && wrapper,
                {
                    borderColor: colors.text,
                    backgroundColor: isDark ? colors.pink : colors.orange
                }]}
            onPress={handleOnPress}>
            <View style={styles.ctnIcons}>
                {
                    ICONS_THEME.map((e, i) => (
                        <View
                            key={`icon_${e.id}`}
                            style={styles.icon}>
                            <Icon
                                name={e.icon}
                                size={20}
                                color={colors.white} />
                        </View>
                    ))
                }
            </View>
            <Animated.View
                style={[
                    styles.circle,
                    { transform: [{ translateX }] }
                ]} />
        </TouchableOpacity>
    );
}
export default SwitchTheme;