import React from "react";
import { View, Text } from 'react-native';
//additional libraries
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//additional components
import { SwitchTheme, Image, InputFullName, InputPassword, ButtonText } from '@src/components';
//hooks
import { useTheme } from '@src/hooks';
//scheme
import { schemeValidation } from '../validations';
//models
import { PropsForm } from '../models';
//styles
import { styles } from '../styles';
//graphic resources
const LogoCompany = require('@src/assets/Images/logoCompany.png');
const LogoCompanyDark = require('@src/assets/Images/logoCompanyDark.png');
//constant
import { INITIAL_STATE_ERROR } from '../constants';
//component
const Form = ({
    error = INITIAL_STATE_ERROR,
    onSignUp,
    onSignIn
}: PropsForm) => {
    //hooks
    const {
        isDark,
        colors } = useTheme();
    const {
        control,
        handleSubmit,
        formState: {
            isValid,
            errors } } = useForm({
                resolver: yupResolver(schemeValidation),
                mode: 'onChange',
                defaultValues: {
                    email: '',
                    password: ''
                }
            });
    //functions
    const handleAuth = (values: any) => {
        const {
            email,
            password
        } = values;
        onSignUp({
            email,
            password
        });
    }
    const handleSignIn = (values: any) => {
        const {
            email,
            password
        } = values;
        onSignIn({
            email,
            password
        });
    }
    //main component
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <SwitchTheme
                wrapper={styles.ctnSwitchTheme} />
            <View style={styles.ctnImage}>
                <Image
                    resizeMode={'contain'}
                    defaultSource={
                        isDark
                            ? LogoCompanyDark
                            : LogoCompany}
                    source={''} />
            </View>
            <View style={styles.ctnForm}>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputFullName
                            wrapper={styles.ctnInput}
                            placeholder={'example@example.com'}
                            icon={'mail'}
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            {...(errors.email?.message && {
                                error: {
                                    isError: true,
                                    error: errors.email?.message
                                }
                            })} />
                    )}
                    name="email"
                    rules={{ required: true }} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputPassword
                            wrapper={styles.ctnInput}
                            placeholder={'contraseña'}
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            {...(errors.password?.message && {
                                error: {
                                    isError: true,
                                    error: errors.password?.message
                                }
                            })} />
                    )}
                    name="password"
                    rules={{ required: true }} />
                <ButtonText
                    wrapper={styles.ctnBtnSignIn}
                    text={'Ingresar'}
                    disable={!isValid}
                    onPress={handleSubmit(handleSignIn)} />
                <ButtonText
                    wrapper={styles.ctnBtnAuth}
                    text={'Registrarse'}
                    type={'SECUNDARY'}
                    disable={!isValid}
                    onPress={handleSubmit(handleAuth)} />
                {
                    error.isError &&
                    <View style={styles.ctnError}>
                        <Text
                            style={[styles.error, { color: isDark ? colors.pink : colors.red }]}>
                            {`Error : ${error.text || 'usuario o contraseña no correspondientes'}`}
                        </Text>
                    </View>
                }
            </View>
        </View>
    );
}
export default Form;