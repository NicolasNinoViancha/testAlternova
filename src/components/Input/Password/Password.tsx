import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
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
const InputPassword = ({
    wrapper,
    placeholder,
    value,
    error = INITIAL_STATE_ERROR,
    onChange,
    onBlur
}: PropsInput) => {
    //hooks
    const {
        isDark,
        colors
    } = useTheme();
    //states
    const [isVisible, setIsVisible] = useState<boolean>(false);
    //functions
    const handleIsVisiblePassword = () => setIsVisible(prev => !prev);
    //main component
    return (
        <View style={[{ width: '100%' }, wrapper && wrapper]}>
            <View
                style={[
                    styles.viewInput,
                    { borderColor: isDark ? colors.pink : colors.text }
                ]}>
                <View style={styles.ctnInput}>
                    <TextInput
                        style={[styles.input, { color: colors.text }]}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        placeholder={placeholder}
                        placeholderTextColor={colors.text}
                        secureTextEntry={!isVisible}
                        value={value} />
                </View>
                <TouchableOpacity
                    onPress={handleIsVisiblePassword}>
                    <Icon
                        name={
                            isVisible
                                ? 'eye-off'
                                : 'eye'}
                        size={20}
                        color={colors.text} />
                </TouchableOpacity>
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
export default InputPassword;