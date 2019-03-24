import styled from 'styled-components';

const MoviesWrapper = styled.div`
box-sizing: border-box;
    display: flex;
     
        flex-wrap: wrap;
        min-height: calc(100vh - 6em - 4em - 4em - 6em);
        
        justify-content: ${props => (props.isLoading ? 'center' : 'space-between')};
        align-items: center;
`;

export default MoviesWrapper;
