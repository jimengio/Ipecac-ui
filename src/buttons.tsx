import React, { CSSProperties } from "react";
import { cx, css } from "emotion";

import { Theme } from "./types";
import { triggeredByScanner } from "./util/dom";

export enum ButtonSize {
  Small = "small",
  Normal = "normal",
  Larger = "larger",
  Large = "large",
}

interface IButtonProps {
  round?: boolean;
  inverse?: boolean;
  size?: string;
  square?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  style?: CSSProperties;
  justNeedLeftRadius?: boolean;
  justNeedRightRadius?: boolean;
  withOutRadius?: boolean;
  tabChange?: boolean;
  inverseTabChange?: boolean;
}

export default class Button extends React.Component<IButtonProps, any> {
  render() {
    return (
      <button
        onClick={
          this.props.disabled
            ? null
            : (event) => {
                if (triggeredByScanner(event)) {
                  console.warn("Click event triggered by keyboard with event.detail==0 ! Skipping!", event.nativeEvent);
                  return;
                }
                if (this.props.onClick != null) {
                  this.props.onClick();
                } else {
                  console.warn("Button click not handled!");
                }
              }
        }
        className={cx(
          styleButton,
          this.props.round === true ? styleRound : null,
          this.props.inverse ? styleInverse : null,
          this.props.square ? styleSquare : null,
          this.props.size === ButtonSize.Small ? styleSmall : null,
          this.props.size === ButtonSize.Larger ? styleLarger : null,
          this.props.size === ButtonSize.Large ? styleLarge : null,
          this.props.disabled ? styleDisabled : null,
          this.props.withOutRadius ? styleWithouRadius : null,
          this.props.justNeedLeftRadius ? styleLeftRadius : null,
          this.props.justNeedRightRadius ? styleRightRadius : null,
          this.props.tabChange ? styleTabChange : null,
          this.props.inverseTabChange ? styleInverseTabChange : null,

          this.props.className
        )}
        style={this.props.style}
      >
        {this.props.children}
      </button>
    );
  }
}

var styleButton = css`
  display: inline-block;
  font-weight: 500;
  touch-action: manipulation;
  white-space: nowrap;
  line-height: 48px;
  height: 50px;
  border: 1px solid ${Theme.Divider};
  font-weight: 300;
  font-size: 20px;
  min-width: 160px;
  background-color: white;
  border-radius: 4px;
  padding: 0 20px;
  color: ${Theme.Dark};
  border-color: ${Theme.Dark};
  outline: none;
  cursor: pointer;

  -webkit-tap-highlight-color: transparent;
`;

const styleRound = css`
  border-radius: 25px;
`;

const styleInverse = css`
  background: ${Theme.Dark};
  color: white;
`;

const styleSmall = css`
  height: 40px;
  line-height: 38px;
`;

const styleLarger = css`
  font-size: 24px;
  height: 80px;
`;

const styleLarge = null;

const styleSquare = css`
  width: 50px;
  min-width: 50px;
`;

const styleDisabled = css`
  background-color: ${Theme.BgDisabled};
  border-color: ${Theme.BgDisabled};
`;

const styleLeftRadius = css`
  border-radius: 10px 0 0 10px;
`;

const styleRightRadius = css`
  border-radius: 0 10px 10px 0;
`;

const styleWithouRadius = css`
  border-radius: 0;
`;

/**tab的颜色 */
const styleTabChange = css`
  color: ${Theme.GreyDark};
  border: 1px solid ${Theme.GreyDark};
`;

const styleInverseTabChange = css`
  background: ${Theme.GreyDark};
  color: white;
  border: 1px solid ${Theme.GreyDark};
`;
