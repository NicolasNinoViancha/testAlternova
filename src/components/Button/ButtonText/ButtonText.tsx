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
    type = 'PRIMARY',
    disable = false,
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
                type === 'PRIMARY' && { backgroundColor: isDark ? colors.pink : colors.black },
                type === 'SECUNDARY' && { borderWidth: 2, borderColor: isDark ? colors.pink : colors.black },
                disable && { borderWidth: 0, backgroundColor: colors.gray }
            ]}
            disabled={disable}
            onPress={onPress}>
            <Text
                style={[
                    styles.text,
                    type === 'PRIMARY' && { color: colors.white },
                    type === 'SECUNDARY' && { color: isDark ? colors.pink : colors.black },
                    disable && { color: colors.white }
                ]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};
export default ButtonText;