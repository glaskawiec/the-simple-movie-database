import styled from 'styled-components';

const SelectWrapper = styled.div`
display: inline-block;
margin-right: 1.5em;
 margin-top: 1em;

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width:80%;
    margin-left: auto;
    margin-right: auto;
  }

`;

export default SelectWrapper;
