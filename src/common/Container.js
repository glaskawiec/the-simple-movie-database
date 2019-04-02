import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  min-height: calc(100vh - 14em);
  
  @media (max-width: 576px) {
    width: 80%;
    min-height: calc(100vh - 12em);
  }
  
  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default Container;
