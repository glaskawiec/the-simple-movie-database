import styled from 'styled-components';

const Description = styled.div`
  line-height: 1.5;
  font-size: 1.1em;
  flex: 0 0 70%;
  max-width: 70%;
  
  @media (max-width: 768px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export default Description;
