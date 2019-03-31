import styled from 'styled-components';

const MovieWrapper = styled.section`
  margin-top: 3em;
  margin-bottom: 3em;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
    
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export default MovieWrapper;
