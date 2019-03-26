import styled from 'styled-components';

const PageNumber = styled.span`
  background-color: ${props => (props.isActive ? props.theme.colors.primary : 'none')};
  color: ${props => (props.isActive ? props.theme.colors.background : props.theme.colors.text)};

  &:hover {
    background-color: ${props => (props.isActive ? props.theme.colors.primary : '#DDD')};
  }
`;

export default PageNumber;
