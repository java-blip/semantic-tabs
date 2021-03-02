import styled, { keyframes } from "styled-components";

const slideInUp = keyframes`
  from {
      tranform: translate3d(0, 10px, 0);
      opacity: 0;
  }
  to {
      tranform: translate3d(0, 0, 0);
      opacity: 1;
  }
`;

const slideInDown = keyframes`
  from {
      tranform: translate3d(0, 10px, 0);
      opacity: 0;
  }
  to {
      tranform: translate3d(0, 0, 0);
      opacity: 1;
  }
`;

const Tab = styled.div`
  display: inline-block;
  positon: relative;
  animation: ${(props: { 
      animation?: string 
    }) => props.animation === "SlideInUp" ? 
                    slideInUp : props.animation === "SlideInDown" ? 
                    slideInDown : slideInUp
    };
  & a {
      backface-visibility: hidden;
      position: relative;
      transform: translateZ(0px);
      -webkit-transform: translateZ(0px);
      color: #9b9b9b;
      text-decoration: none;
      padding: 10px 0;
      display: inline-block;
      margin: 4px;
      transition: all ease-in-out 0.15s;
      &:hover {
          color: black;
      }
      &:not(:last-child) {
          margin-right: 1.5em;
      }
  }
  &.is-active {
          color: black;
  }
`;

const TabItem = (props: { 
    href: string | object, 
    children?: JSX.Element | string | undefined | null,
    about?: string,
    text?: string,
    className?: string
}) => <Tab className={props.className}>
         <a href={`${props.href}`} rel="noreferrer" about={props.about}>
             {props.children || props.text}
         </a>
      </Tab>; 

export { TabItem };
export default TabItem;