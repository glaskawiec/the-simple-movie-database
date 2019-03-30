import styled from 'styled-components';

const ProfilesWrapper = styled.ol`
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  list-style-position: inside;
  padding: 0;
  display: flex;
  line-height: 1.4em;
  margin-top: 2em;
    
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default ProfilesWrapper;
