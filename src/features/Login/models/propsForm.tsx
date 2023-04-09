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