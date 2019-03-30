import styled from 'styled-components';

const ImageWrapper = styled.div`
    display: block;
    box-sizing: border-box;
    width: 100%;
    max-height: 100%;
    border-width: 0px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
  
  @media (max-width: 768px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export default ImageWrapper;
