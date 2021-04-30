import * as React from 'react';

export interface ThemeContextInterface {
  theme: string;
  setTheme: CallableFunction;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
  theme: 'dark',
  setTheme: () => {}
});

export const ThemeContextProvider = ThemeContext.Provider;

export const ThemeContextConsumer = ThemeContext.Consumer;
