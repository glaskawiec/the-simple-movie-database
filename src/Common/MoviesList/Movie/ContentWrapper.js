import styled from 'styled-components';

const ContentWrapper = styled.div`
  color: #000;
  font-size: 1em;
  width: 298px;
  height: 278px;
  position: relative;
  box-sizing: border-box;
  padding: 10px 16px 16px 16px;
  overflow: hidden;
  
  //z-index: -1;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  
  //@media (max-width: 768px) {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  //}
  
  @media (max-width: 576px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export default ContentWrapper;
