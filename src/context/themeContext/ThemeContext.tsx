import React, { createContext, useReducer } from 'react';
import { lightTheme, themeReducer, ThemeState } from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme); // Todo: leer el tema global
  const setDarkTheme = () => {
    dispatch({ type: 'dark_theme' });
    console.log('setDark');
  };
  const setLightTheme = () => {
    dispatch({ type: 'light_theme' });
    console.log('setLight');
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
