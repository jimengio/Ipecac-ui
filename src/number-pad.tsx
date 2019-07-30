import React, { FC, CSSProperties } from "react";
import { css, cx } from "emotion";
import { center, row, column } from "@jimengio/shared-utils";
import { lingual } from "./lingual";

let NumberPad: FC<{
  className?: string;
  style?: CSSProperties;
  onInsert: (char: string) => void;
  onBackspace: () => void;
  onClear: () => void;
  onEnter: () => void;
}> = (props) => {
  let renderInsert = (x: string) => {
    return (
      <div
        className={cx(center, styleKeystroke)}
        onClick={() => {
          props.onInsert(x);
        }}
      >
        {x}
      </div>
    );
  };

  let renderControl = (x: string, handler: (event: React.MouseEvent) => void) => {
    return (
      <div className={cx(center, styleControlButton)} onClick={handler}>
        {x}
      </div>
    );
  };

  let renderEnter = (x: string, handler: (event: React.MouseEvent) => void) => {
    return (
      <div className={cx(center, styleEnterButton)} onClick={handler}>
        {x}
      </div>
    );
  };

  return (
    <div
      className={cx(row, styleContainer, props.className)}
      style={props.style}
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      <div className={styleInsertsArea}>
        {renderInsert("1")}
        {renderInsert("2")}
        {renderInsert("3")}
        {renderInsert("4")}
        {renderInsert("5")}
        {renderInsert("6")}
        {renderInsert("7")}
        {renderInsert("8")}
        {renderInsert("9")}
        {renderInsert(".")}
        {renderInsert("00")}
        {renderInsert("0")}
      </div>
      <div className={cx(column, styleControlArea)}>
        {renderControl(lingual.delete, (event) => {
          props.onBackspace();
        })}
        {renderControl(lingual.clear, (event) => {
          props.onClear();
        })}
        {renderEnter(lingual.enter, (event) => {
          props.onEnter();
        })}
      </div>
    </div>
  );
};

export default NumberPad;

export let numberPadName = "number-pad-placeholder";

let noOp = () => {
  console.log("No input target");
};

let NumberPadPlaceholder: FC<{}> = () => {
  return (
    <div className={cx(stylePlaceholder, numberPadName)}>
      <NumberPad key="fake" className={styleFakePad} onInsert={noOp} onBackspace={noOp} onClear={noOp} onEnter={noOp} />
    </div>
  );
};

export let NumberPadPopupLayout: FC<{
  className?: string;
  formClassName?: string;
}> = (props) => {
  return (
    <div className={cx(row, props.className)}>
      <div className={cx(column, styleFormArea, props.formClassName)}>{props.children}</div>
      <div className={cx(center, stylePadContainer)}>
        <NumberPadPlaceholder />
      </div>
    </div>
  );
};

/** 使用一个比较高的 z-index 保证始终在顶部 */
let styleContainer = css`
  width: 350px;
  background-color: hsla(198, 100%, 96%, 1);
  z-index: 999;
`;

let styleKeystroke = css`
  width: 60px;
  height: 60px;
  background: rgba(103, 127, 137, 1);
  border-radius: 4px;

  font-size: 24px;
  color: rgba(255, 255, 255, 1);

  display: inline-flex;
  margin: 10px;
`;

let styleControlButton = css`
  height: 60px;
  display: inline-flex;
  width: 90px;

  border-radius: 4px;
  border: 2px solid rgba(50, 74, 89, 1);
  margin: 10px;

  font-size: 24px;
  color: rgba(50, 74, 89, 1);
`;

let styleInsertsArea = css`
  width: 240px;
`;

let styleControlArea = null;

let styleEnterButton = css`
  height: 140px;
  background: hsla(203, 28%, 27%, 1);
  border-radius: 4px;

  font-size: 24px;
  color: rgba(255, 255, 255, 1);

  display: inline-flex;
  margin: 10px;
`;

/** 关闭了点击事件, 不过会干扰行为导致无法输入 */
let stylePlaceholder = css`
  width: 350px;
  height: 320px;
  background-color: hsla(198, 100%, 96%, 1);
  pointer-events: none;
`;

let styleFormArea = css`
  padding: 20px;
`;

let stylePadContainer = css`
  padding: 20px;
  background-color: hsla(198, 100%, 96%, 1);
`;

let styleFakePad = css`
  opacity: 0.6;
`;
