import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from  {
 opacity: 0;
  }
  to {
     opacity: 1;
  }
`;

const ImageStyled = styled.img`
 display: block;
  max-width: 100%;
  height: 100%;
  margin: auto;
      background-color: #dbdbdb;
      
       opacity: 1;
  animation: ${fadeIn} 0.3s ease;
  
    @media (max-width: 768px) {
    flex: 100%;
    max-width: 100%;
    height: auto;
  }
`;

export default ImageStyled;
