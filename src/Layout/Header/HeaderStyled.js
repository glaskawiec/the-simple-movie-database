import styled from 'styled-components';

const HeaderStyled = styled.div`
  background-color: ${props => props.theme.secondary};
  width: 100%;
  height: 6em;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    height: 4em;
  }
`;

export default HeaderStyled;
