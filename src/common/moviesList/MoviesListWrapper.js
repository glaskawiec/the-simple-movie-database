import styled from 'styled-components';

const MoviesListWrapper = styled.div`
  box-sizing: border-box;
  margin-bottom: 2em;
  margin-top: 2em;
  display: flex;   
  flex-wrap: wrap;
  justify-content: ${props => (props.centerContent ? 'center' : 'space-between')};
  align-items: center;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  ${props => (props.centerContent ? 'min-height: calc(100vh - 32em);' : '')};
`;

export default MoviesListWrapper;
