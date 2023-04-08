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
    },
    setScheme: () => void,
}

export type PropsProvider = {
    children: React.ReactNode;
}
