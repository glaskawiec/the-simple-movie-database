import styled from 'styled-components';

const Navigation = styled.nav`
  position: relative;
  height: 70%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  font-family: 'Arial', serif;
  font-weight: 400;
  text-align: center;
    
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export default Navigation;
