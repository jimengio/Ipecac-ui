import React from "react";
import ReactDOM from "react-dom";
import { css, cx } from "emotion";
import { CSSTransition, TransitionGroup } from "react-transition-group";

let transitionDuration = 120;

interface IProps {
  visible: boolean;
  renderContent: () => any;
  noPadding?: boolean;
}

export default class PopupArea extends React.Component<IProps, any> {
  mainElement: HTMLDivElement;

  constructor(props: IProps) {
    super(props);

    this.mainElement = document.createElement("div");
  }

  componentDidMount() {
    let container = document.querySelector(".popup-area");
    container.appendChild(this.mainElement);
  }

  componentWillUnmount() {
    let container = document.querySelector(".popup-area");
    container.removeChild(this.mainElement);
  }

  render() {
    return ReactDOM.createPortal(
      <div className={styleAnimations}>
        <CSSTransition in={this.props.visible} unmountOnExit classNames={cx("backdrop")} timeout={transitionDuration}>
          <div className={cx(styleContainer)}>
            <div className={cx(styleDialog, this.props.noPadding ? styleNoPadding : null)}>{this.props.renderContent()}</div>
          </div>
        </CSSTransition>
      </div>,
      this.mainElement
    );
  }
}

let styleContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
  display: flex;
  z-index: 500;

  transition-timing-function: ease-in;
`;

let styleDialog = css`
  min-width: 400px;
  min-height: 200px;
  margin: auto;
  background-color: white;
  border-radius: 10px;
  padding: 32px;
`;

let styleAnimations = css`
  .backdrop {
    transition-timing-function: ease-in-out;
  }

  .backdrop-enter {
    opacity: 0;
  }
  .backdrop-enter.backdrop-enter-active {
    opacity: 1;
    transition: ${transitionDuration}ms;
  }
  .backdrop-exit {
    opacity: 1;
  }
  .backdrop-exit.backdrop-exit-active {
    transition: ${transitionDuration}ms;
    opacity: 0;
  }
`;

let styleNoPadding = css`
  padding: 0;
`;
