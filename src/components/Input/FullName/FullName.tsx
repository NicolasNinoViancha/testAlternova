import React from "react";
import { View, TextInput, Text } from 'react-native';
//additional components
import { Icon } from '@src/components';
//hooks
import { useTheme } from '@src/hooks';
//models
import { PropsInput } from './models';
//styles
import { styles } from "./styles";
//constant
import { INITIAL_STATE_ERROR } from './constants';
//component
const InputFullName = ({
    wrapper,
    placeholder = 'Ingrese un valor',
    value,
    icon,
    error = INITIAL_STATE_ERROR,
    onChange,
    onBlur
}: PropsInput) => {
    //hooks
    const {
        isDark,
        colors
    } = useTheme();
    //main component
    return (
        <View style={[{ width: '100%' }, wrapper && wrapper]}>
            <View
                style={[
                    styles.viewInput,
                    { borderColor: isDark ? colors.pink : colors.text }
                ]}>
                {
                    icon &&
                    <Icon
                        name={icon}
                        size={20}
                        color={colors.text} />
                }
                <View style={styles.ctnInput}>
                    <TextInput
                        style={[styles.input, { color: colors.text }]}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        placeholder={placeholder}
                        placeholderTextColor={colors.text}
                        value={value} />
                </View>
            </View>
            {
                error.isError &&
                <View style={styles.ctnError}>
                    <Icon
                        name={'close'}
                        size={20}
                        color={
                            isDark
                                ? colors.pink
                                : colors.red
                        } />
                    <Text style={[
                        styles.error,
                        { color: isDark ? colors.pink : colors.red }]}>
                        {error.error || 'esto es un error'}
                    </Text>
                </View>
            }
        </View>
    )
};
export default InputFullName;