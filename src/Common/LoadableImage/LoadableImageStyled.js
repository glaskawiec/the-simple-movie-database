import styled from 'styled-components';

const LoadableImageStyled = styled.img`
  background-color: #dbdbdb;
  display: block;
  max-width: 100%;
  height: 100%;
  margin: auto;
  
  @media (max-width: 768px) {
    flex: 100%;
    max-width: 100%;
    height: auto;
  }
`;

export default LoadableImageStyled;
