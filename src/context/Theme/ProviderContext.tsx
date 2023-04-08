import React, { useEffect, useState } from "react";
import { useColorScheme } from 'react-native';
//context
import ThemeContext from './ThemeContext';
//models
import { PropsProvider } from './models';
//constant
import { colors } from '@src/theme';
//component
const ProviderContext = ({ children }: PropsProvider) => {
    //hooks
    const colorScheme = useColorScheme();//dark | light | no-preference
    //states
    const [isDark, setIsDark] = useState<boolean>(colorScheme === "dark");
    //effets
    useEffect(() => {
        setIsDark(colorScheme === "dark");
    }, [colorScheme]);
    //Object Theme
    const defaultTheme = {
        isDark,
        colors: isDark
            ? {
                ...colors.dark,
                ...colors.common
            }
            : {
                ...colors.light,
                ...colors.common
            },
        setScheme: () => setIsDark(prev => !prev),
    };
    //main Component
    return (
        <ThemeContext.Provider value={defaultTheme} >
            {children}
        </ThemeContext.Provider>
    );
};

export default ProviderContext;
