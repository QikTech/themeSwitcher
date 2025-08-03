import type { DefaultTheme } from 'styled-components';

export const theme2: DefaultTheme = {
  colors: {
    background: '#121212',
    text: '#e0e0e0',
    primary: '#402463ff',
    secondary: '#03dac6',
    border: '#444',
  },
  fonts: {
    main: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
    size: {
      base: '18px',
      h1: '3em',
      h2: '2.4em',
    },
  },
  spacing: {
    container: '0 1rem',
    gap: '1.5rem',
    padding: '1.5rem',
    margin: '1.5rem 0',
  },
  layout: {
    type: 'sidebar',
    sidebarWidth: '250px',
    headerHeight: '60px',
  },
  components: {
    button: {
      padding: '12px 24px',
      borderRadius: '8px',
    },
  },
};