import React from "react";
import { css, cx } from "emotion";

import { Theme } from "./types";

export enum MessageKind {
  Success = "success",
  Failure = "failure",
  Normal = "normal",
}

interface IProps {
  message: string;
  kind: MessageKind;
}

export default class MessageBanner extends React.Component<IProps, any> {
  render() {
    let themeColor = Theme.Dark;
    if (this.props.kind === MessageKind.Success) {
      themeColor = Theme.Green;
    } else if (this.props.kind === MessageKind.Failure) {
      themeColor = Theme.Red;
    }

    return (
      <div className={cx(styleBanner)} style={{ color: themeColor, borderColor: themeColor }}>
        {this.props.message}
      </div>
    );
  }
}

const styleBanner = css`
  border-width: 1px;
  border-style: solid;
  height: 60px;
  width: 100%;
  font-size: 32px;
  text-align: center;
  line-height: 58px;
  border-radius: 5px;
`;
