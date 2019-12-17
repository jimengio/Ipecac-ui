import React from "react";
import { css, cx } from "emotion";

import * as layout from "@jimengio/flex-styles";
import { Theme } from "./types";

interface IProps {
  percentage: number;
}

export default class Progress extends React.Component<IProps, any> {
  render() {
    return (
      <div className={cx(layout.row, styleArea)}>
        <div className={styleProgress} style={{ width: `${this.props.percentage}%` }} />
      </div>
    );
  }
}

const styleArea = css`
  display: inline-block;
  border: 1px solid ${Theme.Dark};
  border-radius: 5px;
  height: 40px;
  vertical-align: middle;
  width: 200px;
  align-items: stretch;
  overflow: hidden;
`;

const styleProgress = css`
  background-color: ${Theme.Dark};
  height: 100%;
`;
