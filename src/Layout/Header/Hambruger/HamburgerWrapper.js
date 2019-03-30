import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  padding: 0;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter, -webkit-filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  overflow: visible;
  margin-left: 10%;
`;

export default HamburgerWrapper;
