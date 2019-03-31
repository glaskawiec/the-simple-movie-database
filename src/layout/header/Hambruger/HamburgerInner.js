import styled from 'styled-components';

const HamburgerInner = styled.div`
    display: block;
    top: 50%;
    margin-top: -1px;

    &::before, &::after {
      content: "";
      display: block;
    }
    
    &::before {
        top: -6px;
    }

    &::after {
      bottom: -6px;
    }
    
    &, &::before, &::after {
    width: 25px;
    height: 2px;
    background-color: ${props => (props.isDarkTheme && props.showCross ? '#000000' : '#FFFFFF')};
    border-radius: 4px;
    position: absolute;
    transition-property: -webkit-transform;
    transition-property: transform, -webkit-transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    }
    
    ${props => (props.showArrow ? `
    &::before {
      -webkit-transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
      transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
    }

     &::after {
      -webkit-transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
      transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
    }
    
    & {
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
    }`
    : '')
}    
    
        ${props => (props.showCross ? `
    &::before {
          top: 0;
    transition: top .1s ease-out,opacity .1s ease-out .12s;
    opacity: 0;
    }

     &::after {
      bottom: 0;
    transition: bottom .1s ease-out,transform .22s cubic-bezier(.215,.61,.355,1) .12s;
    transform: rotate(-90deg);
    }
    
    & {
    transition-delay: .12s;
    transition-timing-function: cubic-bezier(.215,.61,.355,1);
    transform: rotate(225deg);
    }`
    : '')
} 
`;

export default HamburgerInner;
