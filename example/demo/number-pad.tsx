import React, { FC, useState } from "react";
import { css, cx } from "emotion";
import { center, fullscreen } from "@jimengio/shared-utils";
import NumberPad from "../../src/number-pad";
import InputNumberPad from "../../src/input-number-pad";

let DemoNumberPad: FC<{}> = (props) => {
  let [value, setValue] = useState(null as number);

  return (
    <div className={cx(styleContainer)}>
      <NumberPad
        onInsert={(c) => {
          console.log("insert", c);
        }}
        onBackspace={() => {
          console.log("backspace");
        }}
        onClear={() => {
          console.log("on clear");
        }}
        onEnter={() => {
          console.log("enter");
        }}
      />

      <div className={styleArea}>
        <InputNumberPad
          id="input0"
          value={value}
          onChange={(value: number) => {
            console.log("got value:", value);
            setValue(value);
          }}
          placeholder={"Please input"}
          onNext={() => {
            /** 手动调用来聚集到下一个输入框 */
            document.getElementById("input1").focus();
          }}
          autoFocus
        />
      </div>

      <div className={styleArea}>
        <InputNumberPad
          id={"input1"}
          value={value}
          onChange={(value: number) => {
            console.log("got value:", value);
            setValue(value);
          }}
          placeholder={"Please input"}
          onNext={() => {
            console.log("next");
          }}
        />
      </div>
    </div>
  );
};

export default DemoNumberPad;

let styleContainer = css`
  background-color: hsl(0, 0%, 92%);
`;

let styleArea = css`
  padding: 20px;
  width: 300px;
`;
