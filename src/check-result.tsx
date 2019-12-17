import React from "react";
import { css, cx } from "emotion";

import * as layout from "@jimengio/flex-styles";
import { Theme } from "./types";

interface ICheckResultProps {
  name?: string;
  good: boolean;
  circleOnly?: boolean;
  unknown?: boolean;
}

export default class CheckResult extends React.Component<ICheckResultProps, any> {
  render() {
    return (
      <div className={cx(layout.center, styleResult)}>
        {this.renderCircle()}

        <div className={styleText}>{this.props.name}</div>
      </div>
    );
  }
  renderCircle() {
    if (this.props.unknown) {
      return <div className={cx(layout.center, styleCircle, styleUnknown)} />;
    }
    if (this.props.good) {
      return <div className={cx(layout.center, styleCircle, styleGood)}>OK</div>;
    }
    return <div className={cx(layout.center, styleCircle, styleNotGood)}>NG</div>;
  }
}

const styleCircle = css`
  height: 60px;
  width: 60px;
  display: inline-flex;
  border-radius: 30px;
  color: white;
  font-size: 24px;
`;

const styleResult = css`
  display: inline-flex;
  vertical-align: middle;
  min-width: 120px;
  padding: 10px;
`;

const styleText = css`
  line-height: 32px;
`;

const styleGood = css`
  background-color: ${Theme.Green};
`;

const styleNotGood = css`
  background-color: ${Theme.Red};
`;

const styleUnknown = css`
  background-color: ${Theme.BgGray};
`;
