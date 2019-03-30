import styled from 'styled-components';

const ContentWrapper = styled.section`
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  padding-left: 3em;

  @media (max-width: 768px) {
    flex: 100%;
    max-width: 100%;
    padding-left: 0;
  }
`;

export default ContentWrapper;
