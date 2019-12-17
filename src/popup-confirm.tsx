import React, { FC } from "react";
import { css, cx } from "emotion";

import PopupArea from "./popup-area";
import JimoIcon, { EJimoIcon } from "@jimengio/jimo-icons";
import { center, rowMiddle } from "@jimengio/flex-styles";
import Space from "./space";
import { FormButtons } from "./form-layout";

import { FuncVoid } from "./types";
import { lingual } from "./lingual";

let PopupConfirm: FC<{
  visible: boolean;
  icon: EJimoIcon;
  iconColor?: string;
  content: string;
  cancelBtnText?: string;
  onCancel: FuncVoid;
  confirmBtnText?: string;
  onConfirm: FuncVoid;
}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <PopupArea
      visible={props.visible}
      renderContent={() => {
        return (
          <div className={cx(center, styleInvalidArea)}>
            <JimoIcon name={props.icon} className={styleIcon} style={{ color: props.iconColor }} />
            <Space height={20} />
            <div className={styleWarnCode}>{props.content}</div>
            <Space height={30} />
            <div className={rowMiddle}>
              <FormButtons
                cancelText={props.cancelBtnText || lingual.cancel}
                onCancel={props.onCancel}
                confirmText={props.confirmBtnText || lingual.confirm}
                onConfirm={props.onConfirm}
              />
            </div>
          </div>
        );
      }}
    ></PopupArea>
  );
};

export default PopupConfirm;

let styleContainer = null;

let styleInvalidArea = css`
  width: 560px;
`;

let styleWarnCode = css`
  font-size: 24px;
  color: rgba(50, 74, 89, 1);
`;

let styleIcon = css`
  font-size: 100px;
  color: rgb(246, 195, 113);
`;
