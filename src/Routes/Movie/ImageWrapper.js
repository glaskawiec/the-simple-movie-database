import styled from 'styled-components';

const ImageWrapper = styled.div`
    display: block;
    box-sizing: border-box;
    //width: 300px;
    max-height: 100%;
    //position: relative;
    // flex: 0 0 33.333333%;
    //max-width: 33.333333%;
    
    z-index: 2;
    border-width: 0px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
  
  //@media (max-width: 768px) {
  //  flex: 100%;
  //  max-width: 100%;
  //}
`;

export default ImageWrapper;
