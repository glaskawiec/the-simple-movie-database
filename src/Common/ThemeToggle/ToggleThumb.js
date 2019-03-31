import styled from 'styled-components';

const ToggleThumb = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.themeToggleThumb};
  box-sizing: border-box;
  transition: all .5s cubic-bezier(.23,1,.32,1) 0ms;
  transform: translateX(0);
   
  ${props => (props.isChecked ? `
    transform: translateX(26px);
    border-color: #19ab27;
  ` : '')}
`;

export default ToggleThumb;
