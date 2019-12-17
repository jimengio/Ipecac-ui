import React, { FC } from "react";
import { css, cx } from "emotion";
import PopupArea from "./popup-area";
import JimoIcon, { EJimoIcon } from "@jimengio/jimo-icons";
import { center } from "@jimengio/flex-styles";
import Space from "./space";
import Button from "./button";
import { FuncVoid } from "./types";
import { lingual } from "./lingual";

let PopupWarning: FC<{
  visible: boolean;
  icon: EJimoIcon;
  iconColor?: string;
  text: string;
  onClose: FuncVoid;
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
            <div className={styleWarnCode}>{props.text}</div>
            <Space height={30} />
            <Button inverse onClick={() => props.onClose()}>
              {lingual.confirm}
            </Button>
          </div>
        );
      }}
    ></PopupArea>
  );
};

export default PopupWarning;

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
