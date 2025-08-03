import React from 'react';
import styled, { css } from 'styled-components';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';
import { useTheme } from '../../context/ThemeContext';
import { themes } from '../../themes';

const AppContainer = styled.div<{ layoutType: string }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
`;

const ContentWrapper = styled.div<{ layoutType: string }>`
  flex-grow: 1;
  
  /* Default mobile padding */
  padding: 1rem;
  padding-top: ${({ theme }) => theme.layout.headerHeight};
  padding-bottom: 70px; 
  
  @media (min-width: 768px) {
    /* Default desktop padding */
    padding: 2rem;
    padding-top: ${({ theme }) => theme.layout.headerHeight};
    padding-bottom: 2rem;
    
    ${({ layoutType, theme }) => layoutType === 'sidebar' && css`
      margin-left: ${theme.layout.sidebarWidth};
      /* Override padding for sidebar layout */
      padding-top: 0rem;
      padding-left: 4rem;
      padding-right: 2rem;
    `}
  }
`;

const Sidebar = styled.div`
  width: ${({ theme }) => theme.layout.sidebarWidth};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  display: none;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const SidebarHeader = styled.h2`
  color: white;
  margin-top: 0;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Layout = () => {
  const { themeName } = useTheme();

  return (
    <AppContainer layoutType={themes[themeName].layout.type}>
      <Header />
      {themes[themeName].layout.type === 'sidebar' && (
        <Sidebar>
          <SidebarHeader>ThemeApp</SidebarHeader>
          <SidebarNav>
            <SidebarLink to="/">Home</SidebarLink>
            <SidebarLink to="/about">About</SidebarLink>
            <SidebarLink to="/contact">Contact</SidebarLink>
          </SidebarNav>
        </Sidebar>
      )}
      <ContentWrapper layoutType={themes[themeName].layout.type}>
        <Outlet />
      </ContentWrapper>
      <BottomNav />
    </AppContainer>
  );
};

export default Layout;

// import React from 'react';
// import styled, { css } from 'styled-components';
// import { Outlet } from 'react-router-dom';
// import Header from './Header';
// import BottomNav from './BottomNav'; // Import the new component
// import { useTheme } from '../../context/ThemeContext';
// import { themes } from '../../themes';
// import { Link } from 'react-router-dom';



// const AppContainer = styled.div<{ layoutType: string }>`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   transition: all 0.8s ease-in-out;
// `;

// const ContentWrapper = styled.div<{ layoutType: string }>`
//   flex-grow: 1;
//   padding-top: ${({ theme }) => theme.layout.headerHeight};
//   padding: 1rem;
  
//   /* Add padding for the bottom nav on mobile */
//   padding-bottom: 70px; 

//   @media (min-width: 768px) {
//     padding: ${({ theme }) => theme.spacing.padding};
//     padding-bottom: ${({ theme }) => theme.spacing.padding}; // Revert to desktop padding
//     ${({ layoutType, theme }) => layoutType === 'sidebar' && css`
//       margin-left: ${theme.layout.sidebarWidth};
//       padding-top: 0;
//       padding-left: 20px;
//       padding-right: 20px;
//     `}
//   }
// `;

// const Sidebar = styled.div`
//   width: ${({ theme }) => theme.layout.sidebarWidth};
//   background-color: ${({ theme }) => theme.colors.secondary};
//   color: white;
//   padding: 20px;
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   overflow-y: auto;
//   transition: all 0.3s ease-in-out;
//   z-index: 1000;
//   display: none; /* Hide sidebar by default */
//   flex-direction: column;
//   align-items: flex-start;

//   @media (min-width: 768px) {
//     display: flex; /* Show sidebar on desktop */
//   }
// `;

// const SidebarNav = styled.nav`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   margin-top: 5rem;
//   width: 100%;
// `;

// const SidebarLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-size: 1.2rem;
//   padding: 10px;
//   width: 100%;
//   border-radius: 5px;
//   &:hover {
//     background-color: rgba(255, 255, 255, 0.1);
//   }
// `;
// const Layout = () => {
//   const { themeName } = useTheme();

//   return (
//     <AppContainer layoutType={themes[themeName].layout.type}>
//       <Header />
//       {themes[themeName].layout.type === 'sidebar' && (
//       <Sidebar>
//           <SidebarNav>
//             <SidebarLink to="/">Home</SidebarLink>
//             <SidebarLink to="/about">About</SidebarLink>
//             <SidebarLink to="/contact">Contact</SidebarLink>
//           </SidebarNav>
//         </Sidebar>
//       )}
//       <ContentWrapper layoutType={themes[themeName].layout.type}>
//         <Outlet />
//       </ContentWrapper>
//       <BottomNav />
//     </AppContainer>
//   );
// };

// export default Layout;
