import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { type DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';
import {  themes, type ThemeName } from '../themes';
import { GlobalStyles } from '../styles/GlobalStyles';

interface ThemeContextType {
  themeName: ThemeName;
  setThemeName: (name: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const savedTheme = localStorage.getItem('themeName') as ThemeName;
    return savedTheme || 'theme1';
  });

  const selectedTheme: DefaultTheme = themes[themeName];

  useEffect(() => {
    localStorage.setItem('themeName', themeName);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <StyledThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};