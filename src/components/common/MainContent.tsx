// src/components/common/MainContent.tsx
import React, { type ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import { themes } from '../../themes';

const ContentWrapper = styled.main<{ layoutType: string }>`
  flex-grow: 1;
  
  /* Default mobile padding */
  padding: 1rem;
  padding-top: ${({ theme }) => theme.layout.headerHeight};
  padding-bottom: 70px; 
  
  /* Default desktop styles */
  @media (min-width: 768px) {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    padding-top: ${({ theme }) => theme.layout.headerHeight};
    padding-bottom: 2rem;

    ${({ layoutType }) => layoutType === 'sidebar' && css`
      max-width: none;
      margin: 0;
      padding-top: 2rem;
      padding-left: 2rem;
      padding-right: 2rem;
    `}
    
    // NEW: Remove max-width for card-grid layout
    ${({ layoutType }) => layoutType === 'card-grid' && css`
      max-width: none;
      margin: 0;
    `}
  }
`;

const Title = styled.h1`
  // ... (rest of the code is the same)
`;

const Paragraph = styled.p`
  // ... (rest of the code is the same)
`;

interface MainContentProps {
  children: ReactNode;
  title: string;
  paragraph: string;
}

const MainContent = ({ children, title, paragraph }: MainContentProps) => {
  const { themeName } = useTheme();
  return (
    <ContentWrapper layoutType={themes[themeName].layout.type}>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      {children}
    </ContentWrapper>
  );
};

export default MainContent;