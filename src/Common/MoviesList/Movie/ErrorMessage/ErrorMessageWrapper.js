import styled from 'styled-components';

const ErrorMessageWrapper = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  padding: 2em;
`;

export default ErrorMessageWrapper;
