import React, { SFC } from "react";
import ReactDOM from "react-dom";

import { css, cx } from "emotion";
import { center, rowCenter } from "@jimengio/shared-utils";
import FaIcon, { EFaIcon } from "@jimengio/fa-icons";
import Space from "./space";

export enum EMessageTipType {
  Failure = "failure",
  Info = "info",
  Success = "success",
}

export interface IMessageTip {
  id: string;
  type: EMessageTipType;
  text: string;
}

// this element is global
let globalContainer = document.querySelector(".message-tips");

let getTipIcon = (type: EMessageTipType) => {
  switch (type) {
    case EMessageTipType.Failure:
      return <FaIcon name={EFaIcon.TimesCircle} className={styleIcon} />;
    case EMessageTipType.Info:
      return <FaIcon name={EFaIcon.ExclamationCircle} className={styleIcon} />;
    case EMessageTipType.Success:
      return <FaIcon name={EFaIcon.CheckCircle} className={styleIcon} />;
    default:
      return <FaIcon name={EFaIcon.CircleThin} className={styleIcon} />;
  }
};

let getThemeColor = (type: EMessageTipType) => {
  switch (type) {
    case EMessageTipType.Failure:
      return "hsla(350, 85%, 61%, 1)";
    case EMessageTipType.Success:
      return "hsla(100, 77%, 44%, 1)";
    case EMessageTipType.Info:
      return "hsla(36, 100%, 69%, 1)";
    default:
      return "blue";
  }
};

let SingleMessagTip: SFC<{ tip: IMessageTip; index: number }> = (props) => {
  return (
    <div
      className={cx(rowCenter, styleTipBase)}
      style={{ top: 80 * props.index, backgroundColor: getThemeColor(props.tip.type) }}
      onClick={() => {
        // ControlMessageTip.removeOne(props.tip.id);
      }}
    >
      {getTipIcon(props.tip.type)}
      <Space width={8} />
      {props.tip.text}
    </div>
  );
};

// main component

let MessageTips: SFC<{
  messageTips: IMessageTip[];
}> = (props) => {
  return ReactDOM.createPortal(
    <div>
      {props.messageTips.map((tip, idx) => {
        return <SingleMessagTip tip={tip} index={idx} key={tip.id} />;
      })}
    </div>,
    globalContainer
  );
};

export default MessageTips;

let styleTipBase = css`
  position: absolute;
  left: 50%;
  top: 0;
  height: 80px;
  background-color: blue;
  padding: 0 40px;
  color: white;
  font-size: 24px;
  transform: translateX(-50%);
  border-radius: 10px;
  transition-duration: 240ms;
  z-index: 777;
`;

let styleIcon = css`
  font-size: 36px;
  color: white;
  font-weight: 100;
`;
