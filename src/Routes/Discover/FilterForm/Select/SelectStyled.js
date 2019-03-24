import styled from 'styled-components';

const SelectStyled = styled.select`
display: inline-block;
  cursor: pointer;
  border-radius: 0.25rem;
  outline: 0;
  height: 2.5em;
  font-size: 1em;
  padding-left: 0.5em;
  
  @media (max-width: 576px) {
    //display: flex;
    //justify-content: center;
    //align-items: flex-start;
    //flex-wrap: wrap;
    width:100%;
  }
`;

export default SelectStyled;
