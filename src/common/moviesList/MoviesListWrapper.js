import styled from 'styled-components';

const MoviesListWrapper = styled.div`
  box-sizing: border-box;
  margin-bottom: 2em;
  margin-top: 2em;
  display: flex;   
  flex-wrap: wrap;
  min-height: calc(100vh - 6em - 4em - 4em - 6em - 4em);      
  justify-content: ${props => (props.centerContent ? 'center' : 'space-between')};
  align-items: center;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    min-height: calc(100vh - 6em - 4em - 4em - 4em - 4em);   
  }
`;

export default MoviesListWrapper;
