import type { DefaultTheme } from 'styled-components';

export const theme3: DefaultTheme = {
  colors: {
    background: '#f9f9f9',
    text: '#555',
    primary: '#ff6b6b',
    secondary: '#48dbfb',
    border: '#f5f5f5',
  },
  fonts: {
    main: 'Pacifico, cursive',
    heading: 'Pacifico, cursive',
    size: {
      base: '17px',
      h1: '3.2em',
      h2: '2.5em',
    },
  },
  spacing: {
    container: '0 2rem',
    gap: '2rem',
    padding: '2rem',
    margin: '2rem 0',
  },
  layout: {
    type: 'card-grid',
    headerHeight: '70px',
  },
  components: {
    button: {
      padding: '15px 30px',
      borderRadius: '20px',
    },
  },
};