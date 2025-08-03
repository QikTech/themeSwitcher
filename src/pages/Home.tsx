import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainContent from '../components/common/MainContent';
import Button from '../components/common/Button';
import ClassicCard from '../components/ClassicCard';
import ListCard from '../components/ListCard';
import ModernCard from '../components/ModernCard';
import { type Product, getProducts } from '../api/fakestore';
import { useTheme } from '../context/ThemeContext';

const GridContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.gap};
  grid-template-columns: 1fr;
  
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  ${({ theme }) => theme.layout.type === 'card-grid' && `
    // FIX: Removed padding to prevent horizontal scrollbar
    background-color: ${theme.colors.secondary};
    border-radius: 10px;
  `}
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
`;

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { themeName } = useTheme();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };
    fetchProducts();
  }, []);

  const renderCards = () => {
    switch (themeName) {
      case 'theme2':
        return (
          <ListContainer>
            {products.map(product => (
              <ListCard key={product.id} product={product} />
            ))}
          </ListContainer>
        );
      case 'theme3':
        return (
          <GridContainer>
            {products.map(product => (
              <ModernCard key={product.id} product={product} />
            ))}
          </GridContainer>
        );
      case 'theme1':
      default:
        return (
          <GridContainer>
            {products.map(product => (
              <ClassicCard key={product.id} product={product} />
            ))}
          </GridContainer>
        );
    }
  };

  return (
    <MainContent
      title="Welcome to demo of Theme Switcher App!"
      paragraph="This is a simple demo page to showcase the different themes. Use the dropdown in the header to see the changes in layout, colors, and fonts."
    >
      {renderCards()}
      <div style={{ marginTop: '2rem' }}>
        <Button onClick={() => window.open('https://hipster-inc.ai/', '_blank', 'noopener,noreferrer')}>
          Visit Us
        </Button>
      </div>
    </MainContent>
  );
};

export default HomePage;