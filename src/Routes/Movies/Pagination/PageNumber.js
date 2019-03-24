import styled from 'styled-components';

const PageNumber = styled.span`

// border: ${props => (props.isActive ? 'solid .1em #F2355B' : 'none')};
background-color: ${props => (props.isActive ? '#F2355B' : 'none')};
color: ${props => (props.isActive ? '#FFFFFF' : '#000000')};

&:hover {
background-color: ${props => (props.isActive ? '#F2355B' : '#DDD')};
}
`;

export default PageNumber;
