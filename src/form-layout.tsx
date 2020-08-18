import React, { FC, ReactNode } from "react";
import { css, cx } from "emotion";
import { row, expand, center, rowCenter, rowParted, column, rowMiddle } from "@jimengio/flex-styles";
import Space from "./space";
import { FuncVoid } from "./types";
import Button from "./button";
import { lingual } from "./lingual";

export interface IFormLayoutItem {
  label: ReactNode;
  content?: ReactNode;
  error?: string;
  render?: () => ReactNode;
}

/** 提供一个类似表单的布局, 不过当前项目表单编辑方式特殊 */
let FormLayout: FC<{ title?: string; items: IFormLayoutItem[]; itemClassName?: string }> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */

  return (
    <div className={styleContainer}>
      {props.title ? <div className={styleTitle}>{props.title}</div> : null}
      {props.items.map((item, idx) => {
        return (
          <div className={cx(row, styleItem, props.itemClassName)} key={idx}>
            <div className={cx(rowMiddle, styleLabel)}>
              {item.label}
              <Space width={8} />
              <span>:</span>
            </div>
            <Space width={8} />
            <div className={expand}>
              <div>{item.content || item.render()}</div>
              {item.error != null ? (
                <>
                  <Space height={10} />
                  <div className={styleError}>{item.error}</div>
                </>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export let FormLayoutVertical: FC<{ title?: string; items: IFormLayoutItem[]; itemClassName?: string }> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */

  return (
    <div className={styleContainer}>
      {props.title ? <div className={styleTitle}>{props.title}</div> : null}
      {props.items.map((item, idx) => {
        return (
          <div className={cx(column, styleItem, styleVerticalItem, props.itemClassName)} key={idx}>
            <div className={cx(rowMiddle, styleLabel)}>
              {item.label}
              <Space width={8} />
              <span>:</span>
            </div>
            <Space width={8} />
            <div className={expand}>{item.content || item.render()}</div>
            {item.error != null ? (
              <>
                <Space height={8} />
                <div className={styleError}>{item.error}</div>{" "}
              </>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default FormLayout;

export let FormLayoutInput: FC<{
  value: string;
  onClick?: () => void;
  /** 默认 50px; 增高的版本 60px */
  larger?: boolean;
  placeholder?: string;
  className?: string;
}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(styleInput, props.larger ? styleInputLarger : null, props.className)} onClick={props.onClick}>
      {props.value || <div className={stylePlaceholder}>{props.placeholder}</div>}
    </div>
  );
};

/** 底部的按钮, 默认设定 100px 到底 */
export let ButtonsAtBottom: FC<{
  onConfirm: FuncVoid;
  onCancel: FuncVoid;
}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(rowCenter, styleButtonsContainer)}>
      <Button className={styleButton} inverse onClick={props.onConfirm}>
        {lingual.confirm}
      </Button>
      <Space width={40} />
      <Button className={styleButton} onClick={props.onCancel}>
        {lingual.cancel}
      </Button>
    </div>
  );
};

export let FormButtons: FC<{
  confirmText?: string;
  cancelText?: string;
  onConfirm: FuncVoid;
  onCancel: FuncVoid;
}> = (props) => {
  return (
    <div className={cx(rowParted)}>
      <Button className={styleButtonNarrow} onClick={props.onCancel}>
        {props.cancelText || lingual.cancel}
      </Button>
      <Space width={20} />
      <Button className={styleButtonWide} inverse onClick={props.onConfirm}>
        {props.confirmText || lingual.finish}
      </Button>
    </div>
  );
};

let styleContainer = css`
  padding: 20px;
`;

let styleButtonsContainer = css`
  margin-bottom: 100px;
  margin-top: 20px;
`;

let styleItem = css`
  line-height: 50px;
  font-size: 24px;
  margin-bottom: 30px;

  align-items: flex-start;
`;

let styleVerticalItem = css`
  align-items: stretch;
`;

let styleInput = css`
  height: 48px;
  line-height: 44px;
  border-radius: 4px;
  border: 2px solid rgba(50, 74, 89, 1);
  font-size: 24px;
  padding: 0 16px;
  overflow: auto;
`;

let styleInputLarger = css`
  height: 58px;
  line-height: 54px;
`;

let styleLabel = css`
  min-width: 160px;

  font-size: 24px;
  color: rgba(103, 127, 137, 1);
  line-height: 24px;
  padding: 12px 0;
`;

let styleButton = css`
  min-width: 180px;
`;

let styleButtonWide = css`
  min-width: 280px;
`;

let styleButtonNarrow = css`
  min-width: 120px;
`;

let styleTitle = css`
  font-size: 24px;
  font-weight: bold;
  color: hsla(203, 28%, 27%, 1);
  line-height: 40px;
  text-align: center;
  margin-bottom: 20px;
`;

let stylePlaceholder = css`
  color: hsla(198, 14%, 47%, 1);
`;

let styleError = css`
  color: red;
  font-size: 20px;
  line-height: 24px;
`;
