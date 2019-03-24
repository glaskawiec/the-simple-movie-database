import styled from 'styled-components';

const Item = styled.li`
  color: #FFFFFF;
  animation-delay: .35s;
  display: block;
  margin-bottom: 1em;
  min-height: 50px;
  position: relative;
  cursor: pointer;
  max-width: 80vw;
  
  font-family: 'Fjalla One',serif;
    font-style: normal;
    font-weight: 300;
    text-transform: uppercase;
    
 
  
    &:hover{
    color: ${props => props.theme.primary};
    }
`;

export default Item;
