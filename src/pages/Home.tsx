import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainContent from '../components/common/MainContent';
import Button from '../components/common/Button';
import Card from '../components/Card';
import { type Product, getProducts } from '../api/fakestore';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../themes';

const GridContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.gap};
  grid-template-columns: 1fr; /* Default to one column for mobile */

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  ${({ theme }) => theme.layout.type === 'card-grid' && `
    padding: ${theme.spacing.padding};
    background-color: ${theme.colors.secondary};
    border-radius: 10px;
  `}
`;

// const GridContainer = styled.div`
//   display: grid;
//   gap: ${({ theme }) => theme.spacing.gap};

//   ${({ theme }) => theme.layout.type === 'card-grid' && `
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     padding: ${theme.spacing.padding};
//     background-color: ${theme.colors.secondary};
//     border-radius: 10px;
//   `}

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: ${({ theme }) => theme.spacing.padding};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  &:last-child {
    border-bottom: none;
  }
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

  return (
    <MainContent
      title="Welcome to Our Theme Switcher App!"
      paragraph="This is a simple demo page to showcase the different themes. Use the dropdown in the header to see the changes in layout, colors, and fonts."
    >
      {themes[themeName].layout.type === 'card-grid' ? (
        <GridContainer>
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </GridContainer>
      ) : (
        <ListContainer>
          {products.map(product => (
            <ListItem key={product.id}>{product.title}</ListItem>
          ))}
        </ListContainer>
      )}
      <div style={{ marginTop: '2rem' }}>
        <Button onClick={() => alert('Button clicked!')}>
          Click Me
        </Button>
      </div>
    </MainContent>
  );
};

export default HomePage;