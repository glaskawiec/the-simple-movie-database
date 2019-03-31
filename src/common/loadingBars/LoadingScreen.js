import styled from 'styled-components';

const LoadingScreen = styled.div`
 min-height: calc(100vh - 6em - 4em - 4em - 9em);

  /* Equal to height of footer */
  /* But also accounting for potential margin-bottom of last child */
  margin-bottom: -50px;
display: flex;
justify-content: center;
align-items: center;
`;

export default LoadingScreen;
