import styled from 'styled-components';

const GetMoreInformation = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 16px;
  cursor: pointer;
    
  &:hover{
    color:  ${props => props.theme.colors.primary};
  }
`;

export default GetMoreInformation;
