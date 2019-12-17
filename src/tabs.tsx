import React from "react";
import { css, cx } from "emotion";

import Button, { EButtonSize } from "./button";

import * as layout from "@jimengio/flex-styles";

export interface ITab {
  value: string;
  title: string;
}

interface IProps {
  size?: EButtonSize;
  tabWidth?: number;
  tabs: ITab[];
  selected: any;
  onSelect: (tab: string) => void;
  className?: string;
}

export default class Tabs extends React.Component<IProps, any> {
  render() {
    let width = this.props.tabWidth || 176;

    return (
      <div className={cx(layout.rowCenter, styleModes, this.props.className)}>
        {this.props.tabs.map((tab, idx) => {
          return (
            <Button
              size={this.props.size}
              key={idx}
              inverse={this.props.selected === tab.value}
              style={{ minWidth: width }}
              className={cx(styleCandidate, idx === 0 ? styleLeftMode : null, idx === this.props.tabs.length - 1 ? styleRightMode : null)}
              onClick={this.onSelect.bind(this, tab.value)}
            >
              {tab.title}
            </Button>
          );
        })}
      </div>
    );
  }

  onSelect(key) {
    this.props.onSelect(key);
  }
}

const styleModes = css`
  justify-content: center;
`;

const styleCandidate = css`
  border-radius: 0;
  border-left-width: 0px;
`;

const styleLeftMode = css`
  border-radius: 5px 0 0 5px;
  border-left-width: 1px;
`;
const styleRightMode = css`
  border-radius: 0 5px 5px 0;
`;
