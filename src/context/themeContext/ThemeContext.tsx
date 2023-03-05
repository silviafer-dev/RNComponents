import React, { createContext, useEffect, useReducer } from 'react';
import { useColorScheme, AppState, Appearance } from 'react-native';
import {
  lightTheme,
  themeReducer,
  ThemeState,
  darkTheme,
} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  // const [theme, dispatch] = useReducer(
  //   themeReducer,
  //   Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  // );

  //!cambio tema segun sistema operativo, antes funcionaba solo con IOS

  useEffect(() => {
    if (colorScheme === 'dark') {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, [colorScheme]);

  //! Por si no funciona en Android hay esta posibilidad

  // useEffect(() => {
  //   AppState.addEventListener('change', status => {
  //     if (status === 'active') {
  //       Appearance.getColorScheme() === 'light'
  //         ? setLightTheme()
  //         : setDarkTheme();
  //     }
  //   });
  // }, []);

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
