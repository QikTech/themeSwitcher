// src/components/common/Header.tsx
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import type { ThemeName } from '../../themes';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.layout.headerHeight};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem; /* Adjust padding for mobile */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.container}; /* Restore desktop padding */
  }
`;

const Logo = styled(Link)`
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const NavLinks = styled.nav`
  display: none; /* Hide on mobile by default */
  gap: 1rem;

  @media (min-width: 768px) {
    display: flex; /* Show on desktop */
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const ThemeSwitcher = styled.select`
  padding: 8px 12px;
  border-radius: 5px;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
  font-family: inherit;
`;

const Header = () => {
  const { themeName, setThemeName } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setThemeName(e.target.value as ThemeName);
  };

  return (
    <HeaderWrapper>
      <Logo to="/">ThemeApp</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
      <ThemeSwitcher onChange={handleThemeChange} value={themeName}>
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </ThemeSwitcher>
    </HeaderWrapper>
  );
};

export default Header;

// import React from 'react';
// import styled from 'styled-components';
// import { useTheme } from '../../context/ThemeContext';
// import type { ThemeName } from '../../themes';
// import { Link } from 'react-router-dom';

// const HeaderWrapper = styled.header`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   height: ${({ theme }) => theme.layout.headerHeight};
//   background-color: ${({ theme }) => theme.colors.primary};
//   color: white;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: ${({ theme }) => theme.spacing.container};
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   z-index: 100;
//   transition: all 0.3s ease-in-out;
// `;

// const Logo = styled(Link)`
//   font-size: 1.5em;
//   font-weight: bold;
//   color: white;
//   text-decoration: none;
//   font-family: ${({ theme }) => theme.fonts.heading};
// `;

// const NavLinks = styled.nav`
//   display: flex;
//   gap: 1rem;
// `;

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-weight: 500;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const ThemeSwitcher = styled.select`
//   padding: 8px 12px;
//   border-radius: 5px;
//   border: none;
//   background-color: rgba(255, 255, 255, 0.2);
//   color: white;
//   cursor: pointer;
//   appearance: none;
//   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
//   background-repeat: no-repeat;
//   background-position: right 10px center;
//   background-size: 12px;
//   font-family: inherit;
// `;

// const Header = () => {
//   const { themeName, setThemeName } = useTheme();

//   const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setThemeName(e.target.value as ThemeName);
//   };

//   return (
//     <HeaderWrapper>
//       <Logo to="/">ThemeApp</Logo>
//       <NavLinks>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//       </NavLinks>
//       <ThemeSwitcher onChange={handleThemeChange} value={themeName}>
//         <option value="theme1">Theme 1</option>
//         <option value="theme2">Theme 2</option>
//         <option value="theme3">Theme 3</option>
//       </ThemeSwitcher>
//     </HeaderWrapper>
//   );
// };

// export default Header;