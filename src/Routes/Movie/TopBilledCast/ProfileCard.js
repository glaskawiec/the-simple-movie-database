import styled from 'styled-components';

const ProfileCard = styled.li`
    border: 1px solid #e3e3e3;
    padding-bottom: 10px;
    width: 140px;
    box-sizing: border-box;
    margin-right: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    background-color: ${props => props.theme.colors.card};
`;

export default ProfileCard;
