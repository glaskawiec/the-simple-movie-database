import styled from 'styled-components';

const ImageWrapper = styled.div`
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  
  @media (max-width: 768px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export default ImageWrapper;
