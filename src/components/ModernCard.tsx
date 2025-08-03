import styled from 'styled-components';
import type { Product } from '../api/fakestore';

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.padding};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
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
  color: ${({ theme }) => theme.colors.text};
`;

const CardPrice = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

interface CardProps {
  product: Product;
}

const ModernCard = ({ product }: CardProps) => {
  return (
    <CardWrapper>
      <CardImage src={product.image} alt={product.title} />
      <CardTitle>{product.title}</CardTitle>
      <CardPrice>${product.price}</CardPrice>
    </CardWrapper>
  );
};

export default ModernCard;