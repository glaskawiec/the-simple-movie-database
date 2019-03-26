import styled from 'styled-components';

const MovieWrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  background-color: ${props => props.theme.colors.card};
  //color: #FFFFFF;
  width: calc(50% - 1em);
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  
  &:nth-last-child(2) {
    margin-bottom: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }

   @media (max-width: 768px) {
      width: 100%;
  }
  
   @media (max-width: 576px) {
      width: 80%;
  }
`;

export default MovieWrapper;
