import { Component, createRef } from "react";
import { TabItem } from "../Tab";
import styled from "styled-components";
import classNames from "classnames";

const TabBarComponent = styled.nav`
  color: white;
  font-weight: 400;
  position: relative;
  white-space: nowrap;
  box-sizing: border-box;
  border-bottom: 2px solid ${(props: {
      defaultBorderColor?: string
  }) => props.defaultBorderColor};
`;

const TabIndicator = styled.div`${(props: { 
      height: number | string,
      width: number | string,
      background: string,
      borderRadius?: number | string,
      className?: string | object | {},
      borderSize?: string,
      borderColor?: string,
      borderStyle?: string | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inherit" | "initial" | "inset" | "none" | "outset" | "ridge" | "solid" | "unset"
    }) =>
    `height: ${typeof props.height === "number" ? props.height + "px" : props.height};
     width: ${typeof props.width === "number" ? props.width + "px" : props.width};
     borderRadius: ${typeof props.borderRadius === "number" ? props.borderRadius + "px" : props.borderRadius};
     borderSize: ${props.borderSize};
     borderStyle: ${props.borderStyle};
     borderColor: ${props.borderColor};
     background: ${props.background};`
};
`;

class TabBar extends Component<{ items: [{ label: string, href: string }]}> {
    containerRef: any = createRef();

    indicatorRef: any = createRef();

    activeItemRef: any = createRef();

    state = { activeItem: 0 };

    componentDidMount() {
        this.updateIndicatorPosition();
    }

    componentDidUpdate(prevState: any) {
        if (prevState.activeItem !== this.state.activeItem) {
            this.updateIndicatorPosition();
        }
    }

    handleItemClick = (e: any) => {
        if (e) {
            e.preventDefault();
        }

        this.setState({ activeItem: Number(e.target.dataset.tabIndex) });
    }

    updateIndicatorPosition() {
        const activeItem = this.activeItemRef.current;
        const container = this.containerRef.current;
        const indicator = this.indicatorRef.current;
        const menuRect = container.getBoundingClientRect();
        const activeItemRect = activeItem.getBoundingClientRect();
        const x = Math.round(activeItemRect.left - menuRect.left);
        indicator.style.left = `${activeItemRect.width}px`;
        indicator.style.transform = `translateX(${x}px)`;
    }

    render() {
        const { items } = this.props;
        const { activeItem } = this.state;
        return(
            <TabBarComponent ref={this.containerRef}>
                {items.map((item, i) => (
                    <TabItem
                     className={classNames('', {
                         'is-active': activeItem === i
                     })} 
                     key={item.label}
                     href={item.href}>
                         {item.label}
                    </TabItem>
                ))}
                <TabIndicator height="5px" width="10px" borderRadius="30px" background="#2c2c2c" />
            </TabBarComponent>
        );
    }
}

export { TabBar };
export default TabBar;