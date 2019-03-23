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
    
    
    &:hover{
    color: #F2355B;
    }
    
    &:last-child {
       margin-right: 0;
  }
`;

export default Item;
