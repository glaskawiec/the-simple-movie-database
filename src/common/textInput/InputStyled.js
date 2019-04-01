import styled from 'styled-components';

const InputStyled = styled.input`
  display: inline-block;
  border-radius: 0.25rem;
  outline: 0;
  height: 2.5em;
  font-size: 1em;
  padding-left: 0.5em;
  border: 1px solid rgb(169, 169, 169);
  width: 100%;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
  
`;

export default InputStyled;
