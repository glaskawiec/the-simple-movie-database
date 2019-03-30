import styled from 'styled-components';

const Title = styled.div`
  font-size: 2.3em;
  font-weight: bold;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  margin-top: 1em;
  margin-bottom: 2px;
    
  @media (max-width: 768px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export default Title;
