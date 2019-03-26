import styled from 'styled-components';

const ContentWrapper = styled.div`
  font-size: 1em;
  height: 278px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 10px 15px 16px;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  
  @media (max-width: 576px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export default ContentWrapper;
