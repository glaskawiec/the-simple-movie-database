import styled from 'styled-components';

const SelectStyled = styled.select`
  display: inline-block;
  cursor: pointer;
  border-radius: 0.25rem;
  outline: 0;
  height: 2.5em;
  font-size: 1em;
  padding-left: 0.5em;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
  
  @media (max-width: 576px) {
    width:100%;
  }
`;

export default SelectStyled;
