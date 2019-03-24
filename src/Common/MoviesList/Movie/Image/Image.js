import styled from 'styled-components';

const Image = styled.img`
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

export default Image;
