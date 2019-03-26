import styled from 'styled-components';

const LoadableImageStyled = styled.div`
  background-color: #dbdbdb;
  display: block;
  max-width: 100%;
  height: 100%;
  margin: auto;
  background-image: url(${props => props.src});
  background-position: 50% 50%;
  background-origin: border-box;
  background-size: cover;
`;

export default LoadableImageStyled;
