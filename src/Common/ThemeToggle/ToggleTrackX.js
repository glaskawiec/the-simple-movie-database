import styled from 'styled-components';

const ToggleTrackX = styled.div`
position: absolute;
    width: 17px;
    height: 17px;
    right: 5px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    
    opacity: 1;
    transition: opacity .25s ease;
    
       ${props => (props.isChecked ? `
 opacity: 0;
    ` : '')}
`;

export default ToggleTrackX;
