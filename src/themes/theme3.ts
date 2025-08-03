import type { DefaultTheme } from 'styled-components';

export const theme3: DefaultTheme = {
  colors: {
    background: '#f9f9f9',
    text: '#555',
    primary: '#1f1010ff',
    secondary: '#e3f0e8ff',
    border: '#f5f5f5',
  },
  fonts: {
     main: 'Calibri, sans-serif',
    heading: 'Calibri, sans-serif',
    size: {
      base: '17px',
      h1: '3.2em',
      h2: '2.5em',
    },
  },

  //heafer spacing
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

  // click me button
  components: {
    button: {
      padding: '15px 30px',
      borderRadius: '20px',
    },
  },
};