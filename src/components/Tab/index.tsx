import React from "react";
import { NonReactStatics } from "hoist-non-react-statics";
import styled, { keyframes, StyledComponent, Keyframes } from "styled-components";

const slideInUp: Keyframes = keyframes`
  from {
      tranform: translate3d(0, 10px, 0);
      opacity: 0;
  }
  to {
      tranform: translate3d(0, 0, 0);
      opacity: 1;
  }
`;

const slideInDown: Keyframes = keyframes`
  from {
      tranform: translate3d(0, 10px, 0);
      opacity: 0;
  }
  to {
      tranform: translate3d(0, 0, 0);
      opacity: 1;
  }
`;

const Tab: String & StyledComponent<"div", any,
    { animation?: string | undefined; }, never> & NonReactStatics<never, {}> = styled.div`
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

interface IProps {
    className?: string,
    href?: string,
    text?: string,
    children: React.ReactNode,
    linkAbout?: string
};

const TabItem = (props: IProps) => {
    return(
        <Tab className={props.className}>
            <a 
              href={props.href}
              rel="noreferrer"
              about={props.linkAbout}>
                  {props.text}
                  {props.children}
              </a>
        </Tab>
    );
}

export { TabItem };
export default TabItem;