import styled from 'styled-components';

const ToggleTrack = styled.div`
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: ${props => props.theme.colors.background};
    transition: all .2s ease;
`;

export default ToggleTrack;
