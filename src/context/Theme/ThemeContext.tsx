import { createContext } from 'react';
import { PropsContext } from './models';
import { COLORS } from '@src/theme';

const ThemeContext = createContext<PropsContext>({
    isDark: false,
    colors: { ...COLORS.light, ...COLORS.common },
    setScheme: () => { },
});
export default ThemeContext;
