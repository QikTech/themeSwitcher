// src/styles/GlobalStyles.ts
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fonts.size.base};
    margin: 0;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, font-family 0.3s ease-in-out;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.text};
    transition: font-family 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  /* Specific styles for theme layouts */
  ${({ theme }) => theme.layout.type === 'sidebar' && css`
    body {
      display: flex;
      min-height: 100vh;
      flex-direction: row;
    }
  `}
  
  /* Mobile-first: Default styles are for mobile. Adjust for larger screens. */
  @media (min-width: 768px) {
    h1 {
      font-size: ${({ theme }) => theme.fonts.size.h1};
    }
  }

  @media (max-width: 767px) {
    body {
      font-size: 14px; /* Smaller base font for mobile */
    }
    h1 {
      font-size: 2em; /* Adjust h1 for mobile */
    }
  }
`;

// import { createGlobalStyle, css } from 'styled-components';

// export const GlobalStyles = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

//   body {
//     background-color: ${({ theme }) => theme.colors.background};
//     color: ${({ theme }) => theme.colors.text};
//     font-family: ${({ theme }) => theme.fonts.main};
//     font-size: ${({ theme }) => theme.fonts.size.base};
//     margin: 0;
//     transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, font-family 0.3s ease-in-out;
//   }

//   h1, h2, h3, h4, h5, h6 {
//     font-family: ${({ theme }) => theme.fonts.heading};
//     color: ${({ theme }) => theme.colors.text};
//     transition: font-family 0.3s ease-in-out, color 0.3s ease-in-out;
//   }

//   a {
//     color: ${({ theme }) => theme.colors.primary};
//   }

//   /* Specific styles for theme layouts */
//   ${({ theme }) => theme.layout.type === 'sidebar' && css`
//     body {
//       display: flex;
//       min-height: 100vh;
//       flex-direction: row;
//     }
//   `}
// `;