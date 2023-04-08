import React, { useContext } from "react";
import { ThemeContext } from '@src/context/Theme';
const useTheme = () => useContext(ThemeContext);
export default useTheme;
