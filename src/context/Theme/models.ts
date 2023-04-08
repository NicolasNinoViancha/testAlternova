import React from 'react';

export type PropsContext = {
    isDark: boolean,
    colors: {
        background: string;
        text: string;
        green: string;
        pink: string;
        gray: string;
        white: string;
        orange: string;
        red: string;
        black: string;
    },
    setScheme: () => void,
}

export type PropsProvider = {
    children: React.ReactNode;
}
