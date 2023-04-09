import React, { useState } from "react";
//additional librearies
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
//additional components
import Form from "./Form";
//models
import { PropsScreen, DataForm, DataError } from '../models';
//constant
import { INITIAL_STATE_ERROR } from '../constants';
import { KEYS_ASYNC_STOREAGE } from '@src/constants';
//component
const Login = ({
    navigation
}: PropsScreen) => {
    //states
    const [errorAuth, setErrorAuth] = useState<DataError>(INITIAL_STATE_ERROR);
    //functions
    const handleSignUp = async ({
        email,
        password }: DataForm) => {
        setErrorAuth(prev => ({
            ...prev,
            isError: false,
        }));
        try {
            const response = await auth().createUserWithEmailAndPassword(email, password);
            if (response)
                await AsyncStorage.setItem(
                    KEYS_ASYNC_STOREAGE.user,
                    JSON.stringify({ email, password }));
            console.log(response);
        } catch (e) {
            const error = e as any,
                message = error.code as any;
            setErrorAuth(prev => ({
                isError: true,
                text: message
            }));
        }
    }
    const handleSignIn = async ({
        email,
        password }: DataForm) => {
        setErrorAuth(prev => ({
            ...prev,
            isError: false,
        }));
        try {
            const response = await auth().signInWithEmailAndPassword(email, password);
            if (response)
                await AsyncStorage.setItem(
                    KEYS_ASYNC_STOREAGE.user,
                    JSON.stringify({ email, password }));
            console.log(response);
        } catch (e) {
            const error = e as any,
                message = error.code as any;
            setErrorAuth(prev => ({
                isError: true,
                text: message
            }));
        }
    }
    //main component
    return (
        <Form
            error={errorAuth}
            onSignUp={handleSignUp}
            onSignIn={handleSignIn} />
    );
}
export default Login;