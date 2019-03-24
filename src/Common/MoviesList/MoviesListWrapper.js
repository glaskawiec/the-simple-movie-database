import styled from 'styled-components';

const MoviesListWrapper = styled.div`
  box-sizing: border-box;
  display: flex;   
  flex-wrap: wrap;
  min-height: calc(100vh - 6em - 4em - 4em - 6em ${props => (!props.withPagination ? '- 11.75em' : '')});      
  justify-content: ${props => (props.isLoading || props.isError ? 'center' : 'space-between')};
  align-items: center;
  
  @media (max-width: 768px) {
      justify-content: center;
  }
  
  @media (max-width: 576px) {
   min-height: calc(100vh - 6em - 4em - 4em - 4em ${props => (!props.withPagination ? '- 25.25em' : '')});   
  }
`;

export default MoviesListWrapper;
