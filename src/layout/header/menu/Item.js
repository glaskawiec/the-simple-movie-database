import styled from 'styled-components';

const Item = styled.li`
  font-family: 'Fjalla One',serif;
  font-style: normal;
  font-weight: 300;
  color: #FFFFFF;
  font-size: 1.5em;
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 1em;
  margin-right: 1em;
  vertical-align: super;
    
   @media (max-width: 576px) {
     margin-right: 0;
   }
    
  &:hover{
    color: ${props => props.theme.colors.primary};
  }
  
  &:last-child {
     margin-right: 0;
  }
`;

export default Item;
