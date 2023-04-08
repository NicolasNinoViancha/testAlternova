import React from "react";
import { View } from 'react-native';
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
import { PropsScreen } from '../models';
//styles
import { styles } from '../styles';
//graphic resources
const LogoCompany = require('@src/assets/Images/logoCompany.png');
const LogoCompanyDark = require('@src/assets/Images/logoCompanyDark.png');
//component
const Login = ({
    navigation
}: PropsScreen) => {
    //hooks
    const {
        isDark,
        colors } = useTheme();
    const {
        control,
        handleSubmit,
        setValue,
        formState: {
            errors,
            isValid } } = useForm({
                resolver: yupResolver(schemeValidation),
                mode: 'onChange',
                defaultValues: {
                    email: '',
                    password: ''
                }
            });
    //functions
    const handleAuth = (values: any) => {

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
                    wrapper={styles.ctnForm}
                    text={'Ingresar'}
                    onPress={handleSubmit(handleAuth)} />
            </View>
        </View>
    );
}
export default Login;