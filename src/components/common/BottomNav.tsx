import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
  
  /* Hide on desktop */
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(RouterLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: white;
  text-decoration: none;
  font-size: 0.75rem;
  padding: 8px;
  flex: 1;
  transition: all 0.3s ease-in-out;

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const NavIcon = styled.div`
  font-size: 1.2rem;
`;

const BottomNav = () => {
  return (
    <NavContainer>
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        <NavIcon><FaHome /></NavIcon>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
        <NavIcon><FaInfoCircle /></NavIcon>
        About
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
        <NavIcon><FaEnvelope /></NavIcon>
        Contact
      </NavLink>
    </NavContainer>
  );
};

export default BottomNav;