import React, { FC, useState, useEffect, useRef } from "react";
import { css, cx } from "emotion";
import NumberPad, { numberPadName } from "./number-pad";
import { lingual } from "./lingual";
import { useImmer } from "use-immer";

/** 返回字符串版本的值用于输入框内部的显示 */
let showString = (x: any) => {
  if (x == null) return "";
  return `${x}`;
};

let InputNumberPad: FC<{
  placeholder?: string;
  /** 通过 id 实现点击"回车"时自动聚焦到下一个, 没有自动实现 */
  id?: string;
  value: number;
  onChange: (number) => void;
  onNext: () => void;

  className?: string;
  inputClassName?: string;
  padClassName?: string;
  alwaysFocus?: boolean;

  autoFocus?: boolean;
}> = (props) => {
  let [draft, setDraft] = useState(showString(props.value));
  let [padPosition, immerPadPosition] = useImmer({} as { top: number; right: number });

  let containerEl = useRef(null as HTMLDivElement);

  let [focused, setFocused] = useState(props.alwaysFocus);

  // 现在没有好的判断 malformed 的检测代码
  let [malformed, setMalformed] = useState(false);

  /** Methods */

  let checkDraft = (newDraft: string) => {
    let guessNumber = parseFloat(newDraft);
    if (typeof guessNumber === "number" && !isNaN(guessNumber)) {
      setMalformed(false);
      props.onChange(guessNumber);
    } else {
      setMalformed(true);
    }
  };

  let insertToDraft = (char: string) => {
    let newDraft = `${showString(draft)}${char}`;
    setDraft(newDraft);

    checkDraft(newDraft);
  };

  let detectPadPosition = () => {
    let placeholder = document.querySelector(`.${numberPadName}`);

    if (placeholder != null) {
      let rect = placeholder.getBoundingClientRect();

      immerPadPosition((draft) => {
        // right 是从左边开始算的
        draft.right = window.innerWidth - rect.right;
        draft.top = rect.top;
      });
    } else {
      console.warn("Cannot find placeholder element for positioning!");
    }
  };

  /** Effects */

  useEffect(() => {
    detectPadPosition();
  }, []);

  useEffect(() => {
    if (props.autoFocus) {
      containerEl.current.focus();
    }
  }, []);

  /** Renderer */

  return (
    <div
      className={cx(styleContainer, props.className)}
      tabIndex={0}
      id={props.id}
      onFocus={() => {
        setFocused(true);
      }}
      ref={containerEl}
      onBlur={() => {
        setFocused(false);
      }}
    >
      <div className={cx(styleNumberInput, props.inputClassName)}>
        {draft || <span className={stylePlaceholder}>{props.placeholder || lingual.pleaseInput}</span>}
      </div>

      {focused || props.alwaysFocus ? (
        <NumberPad
          className={cx(stylePadFloated, props.padClassName)}
          onInsert={(c) => {
            insertToDraft(c);
          }}
          style={padPosition}
          onBackspace={() => {
            if (draft && draft.length > 0) {
              let newDraft = draft.slice(0, draft.length - 1);
              setDraft(newDraft);
              checkDraft(newDraft);
            }
          }}
          onEnter={() => {
            props.onNext();
          }}
          onClear={() => {
            setDraft(null);
            setMalformed(false);
            props.onChange(null);
          }}
        />
      ) : null}
    </div>
  );
};

export default InputNumberPad;

let styleContainer = css`
  background-color: #eee;

  &:focus {
    outline: none;
    background-color: white;
  }
`;

let styleNumberInput = css`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  border: 2px solid rgba(103, 127, 137, 1);
  padding: 0 10px;
  overflow: auto;
  white-space: nowrap;

  font-size: 20px;
  color: rgba(103, 127, 137, 1);
`;

let stylePadFloated = css`
  position: fixed;
  top: 224px;
  right: 70px;
`;

let stylePlaceholder = css`
  color: rgba(103, 127, 137, 1);
`;
