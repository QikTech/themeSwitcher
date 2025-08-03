import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.components.button.padding};
  border-radius: ${({ theme }) => theme.components.button.borderRadius};
  font-size: 1em;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;