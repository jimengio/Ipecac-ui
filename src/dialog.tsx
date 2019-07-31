import React from "react";
import { css, cx } from "emotion";

import * as layout from "@jimengio/shared-utils";
import { Theme } from "./types";

import FaIcon from "@jimengio/fa-icons";
import { EFaIcon } from "@jimengio/fa-icons";

import Button from "./button";
import Space from "./space";
import { lingual } from "./lingual";

interface IProps {
  title: string;
  content: string;
  onClose: () => void;
}

// TODO, 调整设计, 在内部控制是否显示
export default class Dialog extends React.Component<IProps, any> {
  render() {
    return (
      <div className={cx(layout.center, styleDialogBackdrop)} onClick={this.handleClose}>
        <div className={styleDialog} onClick={this.handleStop}>
          <div className={cx(layout.rowCenter, styleHeader)}>
            <span className={styleTitle}>{this.props.title}</span>
            <FaIcon name={EFaIcon.Close} onClick={this.handleClose} className={styleIcon} />
          </div>
          <div className={cx(layout.rowCenter, layout.flex, styleBody)}>
            <FaIcon name={EFaIcon.Warning} className={styleWarn} />
            <Space width={20} />
            <div className={styleMessage}>{this.props.content}</div>
          </div>
          <div className={cx(layout.row, styleToolbar)}>
            <Button inverse onClick={this.handleClose}>
              {lingual.confirm}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  handleClose = () => {
    this.props.onClose();
  };

  handleStop = (event) => {
    event.stopPropagation();
  };
}

const styleDialogBackdrop = css`
  padding-top: 120px;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 500;
  background-color: hsla(0, 0%, 0%, 0.8);
`;

const styleDialog = css`
  position: relative;
  background-color: white;
  border: 1px solid ${Theme.Divider};
  border-radius: 20px;
  min-width: 560px;
  min-height: 280px;
`;

const styleBody = css`
  padding: 40px 20px;
  justify-content: flex-start;
`;

const styleIcon = css`
  font-size: 32px;
`;

const styleMessage = css`
  font-size: 24px;
`;

const styleTitle = null;

const styleHeader = css`
  border-bottom: 1px solid ${Theme.Divider};
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  font-size: 32px;
`;

const styleToolbar = css`
  padding: 20px;
  justify-content: flex-end;
`;

const styleWarn = css`
  font-size: 60px;
  height: 60px;
  color: ${Theme.Orange};
  vertical-align: middle;
`;
