import React, { createContext } from 'react';

interface ThemeContextProps {
  theme: any; // TODO!
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const theme = {};
  const setDarkTheme = () => {
    console.log('setDark');
  };
  const setLightTheme = () => {
    console.log('setLight');
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
