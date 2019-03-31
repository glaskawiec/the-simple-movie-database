import styled from 'styled-components';

const ProfilesCardsWrapper = styled.ol`
  list-style-type: none;
  list-style-position: inside;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  line-height: 1.4em;
  margin-top: 2em;
  max-width: 100vw;
  overflow: hidden;
  
  @media (max-width: 576px) {
   display: flex;
    justify-content: center;
    align-items: center;
  }
  
`;

export default ProfilesCardsWrapper;
