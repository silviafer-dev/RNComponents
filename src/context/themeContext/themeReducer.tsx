import { Theme } from '@react-navigation/native/lib/typescript/src/types';

type ThemeAction = { type: 'light_theme' } | { type: 'dark_theme' };

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

//! interacción con el mundo exterior no necesaria
export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: 'red',
    background: 'white',
    card: 'green',
    text: 'pink',
    border: 'orange',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'light_theme':
      return { ...lightTheme };
    //   return {   //! Realmente el reducer no tiene que existir en el mundo
    //     currentTheme: 'light',    //! exterior y deberia pasarse directamente así
    //     dark: false,
    //     dividerColor: 'rgba(0,0,0,0.7)',
    //     colors: {
    //       primary: 'red',
    //       background: 'blue',
    //       card: 'green',
    //       text: 'pink',
    //       border: 'orange',
    //       notification: 'teal',
    //     },
    //   };

    default:
      return state;
  }
};
