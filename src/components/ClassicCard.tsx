import styled from 'styled-components';
import type { Product } from '../api/fakestore';

const CardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.padding};
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.2em;
  margin: 0 0 10px 0;
`;

const CardPrice = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

interface CardProps {
  product: Product;
}

const ClassicCard = ({ product }: CardProps) => {
  return (
    <CardWrapper>
      <CardImage src={product.image} alt={product.title} />
      <CardTitle>{product.title}</CardTitle>
      <CardPrice>${product.price}</CardPrice>
    </CardWrapper>
  );
};

export default ClassicCard;