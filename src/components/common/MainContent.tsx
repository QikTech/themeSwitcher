// src/components/common/MainContent.tsx
import React, { type ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import { themes } from '../../themes';

const ContentWrapper = styled.main<{ layoutType: string }>`
  padding: ${({ theme }) => theme.spacing.padding};
  margin: ${({ theme }) => theme.spacing.margin};
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - ${({ theme }) => theme.layout.headerHeight} - 2rem);
  
  /* Mobile styles */
  padding: 1rem;
  margin: 0;

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.padding};
    margin: ${({ theme }) => theme.spacing.margin};
    ${({ layoutType }) => layoutType === 'sidebar' && css`
      max-width: none;
      margin: 0;
    `}
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  margin-bottom: ${({ theme }) => theme.spacing.gap};
  animation: fadeIn 0.5s ease-in-out;
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (max-width: 767px) {
    font-size: 2em;
  }
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.gap};
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

// import React, { type ReactNode } from 'react';
// import styled from 'styled-components';
// import { useTheme } from '../../context/ThemeContext';
// import { themes } from '../../themes';

// const ContentWrapper = styled.main<{ layoutType: string }>`
//   padding: ${({ theme }) => theme.spacing.padding};
//   margin: ${({ theme }) => theme.spacing.margin};
//   max-width: 1200px;
//   width: 100%;
//   margin: 0 auto;
//   min-height: calc(100vh - ${({ theme }) => theme.layout.headerHeight} - 2rem);

//   ${({ layoutType }) => layoutType === 'sidebar' && `
//     max-width: none;
//     margin: 0;
//   `}
// `;

// const Title = styled.h1`
//   font-size: ${({ theme }) => theme.fonts.size.h1};
//   margin-bottom: ${({ theme }) => theme.spacing.gap};
//   animation: fadeIn 0.5s ease-in-out;
//   @keyframes fadeIn {
//     from { opacity: 0; transform: translateY(-20px); }
//     to { opacity: 1; transform: translateY(0); }
//   }
// `;

// const Paragraph = styled.p`
//   line-height: 1.6;
//   margin-bottom: ${({ theme }) => theme.spacing.gap};
// `;

// interface MainContentProps {
//   children: ReactNode;
//   title: string;
//   paragraph: string;
// }

// const MainContent = ({ children, title, paragraph }: MainContentProps) => {
//   const { themeName } = useTheme();
//   return (
//     <ContentWrapper layoutType={themes[themeName].layout.type}>
//       <Title>{title}</Title>
//       <Paragraph>{paragraph}</Paragraph>
//       {children}
//     </ContentWrapper>
//   );
// };

// export default MainContent;