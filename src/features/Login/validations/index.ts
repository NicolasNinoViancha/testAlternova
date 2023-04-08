import * as yup from 'yup';

export const schemeValidation = yup.object().shape({
    email: yup
        .string()
        .required('El email es requerido')
        .email(),
    password: yup
        .string()
        .required('La contraseña es requerida')
});