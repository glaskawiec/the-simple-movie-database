import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 2em;
  margin-top: 1em;
  
   @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export default Heading;
