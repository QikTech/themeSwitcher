import styled from 'styled-components';
import type { Product } from '../api/fakestore';

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ListImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 4px;
`;

const ListContent = styled.div`
  flex-grow: 1;
`;

const ListTitle = styled.h4`
  margin: 0;
  font-size: 1em;
`;

const ListPrice = styled.p`
  margin: 0;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

interface ListCardProps {
  product: Product;
}

const ListCard = ({ product }: ListCardProps) => {
  return (
    <ListWrapper>
      <ListImage src={product.image} alt={product.title} />
      <ListContent>
        <ListTitle>{product.title}</ListTitle>
        <ListPrice>${product.price}</ListPrice>
      </ListContent>
    </ListWrapper>
  );
};

export default ListCard;