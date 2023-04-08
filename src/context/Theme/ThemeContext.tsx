import { createContext } from 'react';
import { PropsContext } from './models';
import { colors } from '@src/theme';

const ThemeContext = createContext<PropsContext>({
    isDark: false,
    colors: { ...colors.light, ...colors.common },
    setScheme: () => { },
});
export default ThemeContext;
