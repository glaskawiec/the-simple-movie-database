import styled from 'styled-components';

const Button = styled.span`
&:hover{
color: ${props => props.theme.primary};
}

cursor: pointer;
`;

export default Button;
