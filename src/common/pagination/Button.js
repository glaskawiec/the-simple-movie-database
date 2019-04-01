import styled from 'styled-components';

const Button = styled.span`
  cursor: pointer;
  
  &:hover{
    color: ${props => props.theme.colors.primary};
  }
`;

export default Button;
