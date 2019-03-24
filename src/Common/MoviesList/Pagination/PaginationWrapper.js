import styled from 'styled-components';

const PaginationWrapper = styled.div`
  margin-top: 1em;
  margin-bottom: 2em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  
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

export default PaginationWrapper;
