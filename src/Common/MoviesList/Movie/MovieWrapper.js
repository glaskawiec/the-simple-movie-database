import styled from 'styled-components';

const MovieWrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  background-color: #fff;
 width: calc(50% - 1em);
 
  display: flex;
  align-items: center;
  color: #000;
  //margin-bottom: 2em;
  //margin-right: 1em;
  margin-bottom: 2em;
  
   @media (max-width: 768px) {
      width: 100%;
       //margin-left: auto;
      //margin-right: auto;
      
  }
  //
   @media (max-width: 576px) {
      width: 80%;
      //margin-left: auto;
      //margin-right: auto;
      //margin: auto;
      //justify-content: center;
      //align-items: center;
  }
`;

export default MovieWrapper;
