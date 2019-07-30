import React from "react";
import { css, cx } from "emotion";
import { Theme } from "./types";

enum EventKind {
  Scan = "scan",
  Fail = "fail",
  Finish = "finish",
  Error = "error",
  Pack = "pack",
  Pass = "pass",
  Print = "print",
  Rework = "rework",
  Scrap = "scrap",
  Ship = "ship",
  Store = "store",
  Unpack = "unpack",
  Unstore = "unstore",
  Destroy = "destroy",
  Deviate = "deviate",
  Enter = "enter",
  Inspect = "inspect",
  Remove = "remove",
}

const colorMap = {
  scan: Theme.Dark,
  pack: Theme.Dark,
  print: Theme.Dark,
  store: Theme.Dark,
  unpack: Theme.Dark,
  unstore: Theme.Dark,
  enter: Theme.Dark,
  inspect: Theme.Dark,
  remove: Theme.Dark,
  finish: Theme.Green,
  pass: Theme.Green,
  fail: Theme.Orange,
  rework: Theme.Orange,
  deviate: Theme.Orange,
  scrap: Theme.Red,
  destroy: Theme.Red,
  error: Theme.Red,
};

interface IProps {
  kind: string;
}

export default class EventTip extends React.Component<IProps, any> {
  render() {
    let kind = this.props.kind.toLowerCase();
    let color = colorMap[kind];

    return (
      <div className={styleEventTip} style={{ borderColor: color, color: color }}>
        {this.props.kind.toUpperCase()}
      </div>
    );
  }
}

const styleEventTip = css`
  width: 72px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid red;
  text-align: center;
  line-height: 22px;
`;
