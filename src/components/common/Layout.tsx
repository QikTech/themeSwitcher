import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import { useTheme } from '../../context/ThemeContext';
import { themes } from '../../themes';

const AppContainer = styled.div<{ layoutType: string }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  ${({ layoutType }) => layoutType === 'sidebar' && `
    flex-direction: row;
  `}
`;

const ContentWrapper = styled.div<{ layoutType: string }>`
  flex-grow: 1;
  padding-top: ${({ theme }) => theme.layout.headerHeight};
  
  ${({ layoutType, theme }) => layoutType === 'sidebar' && `
    margin-left: ${theme.layout.sidebarWidth};
    padding-top: 0;
    padding-left: 20px;
    padding-right: 20px;
  `}
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
  transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
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
    </AppContainer>
  );
};

export default Layout;