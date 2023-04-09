import { NavigationProp } from '@react-navigation/native';

export type PropsScreen = {
    testID?: string;
    navigation: NavigationProp<any>;
}

export type DataForm = {
    email: string;
    password: string;
}

export type DataError = {
    isError: boolean;
    text: string;
}

export type PropsForm = {
    testID?: string;
    error?: DataError;
    onSignUp: ({ email, password }: DataForm) => void;
    onSignIn: ({ email, password }: DataForm) => void;
}