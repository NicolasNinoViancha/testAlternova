import React from "react";
import { TouchableOpacity, Text } from 'react-native';
//hooks
import { useTheme } from '@src/hooks';
//models
import { PropsButtonText } from './models';
//styles
import { styles } from './styles';
//component
const ButtonText = ({
    wrapper,
    text = '',
    onPress
}: PropsButtonText) => {
    //hooks
    const {
        isDark,
        colors
    } = useTheme();
    //main component
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[
                styles.container,
                wrapper && wrapper,
                { backgroundColor: isDark ? colors.pink : colors.black }
            ]}
            onPress={onPress}>
            <Text
                style={[styles.text, { color: colors.white }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};
export default ButtonText;