import styled from 'styled-components';

const PageNumber = styled.span`
  background-color: ${props => (props.isActive ? props.theme.primary : 'none')};
  color: ${props => (props.isActive ? '#FFFFFF' : '#000000')};

  &:hover {
    background-color: ${props => (props.isActive ? props.theme.primary : '#DDD')};
  }
`;

export default PageNumber;
