import type { DefaultTheme } from 'styled-components';

export const theme1: DefaultTheme = {
  colors: {
    background: '#f0f2f5',
    text: '#333',
    primary: '#290909ff',
    secondary: '#6c757d',
    border: '#ddd',
  },
  fonts: {
    // Add Calibri as the primary font
    main: 'Calibri, sans-serif',
    heading: 'Calibri, sans-serif',
    size: {
      base: '16px',
      h1: '2.5em',
      h2: '2em',
    },
  },
  spacing: {
    container: '0 2rem',
    gap: '1rem',
    padding: '1rem',
    margin: '1rem 0',
  },
  layout: {
    type: 'minimal',
    headerHeight: '60px',
  },
  components: {
    button: {
      padding: '10px 30px',
      borderRadius: '5px',
    },
  },
};