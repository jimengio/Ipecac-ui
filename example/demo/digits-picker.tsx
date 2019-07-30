import React, { FC } from "react";
import { css } from "emotion";
import { DigitsPicker } from "../../src";

let DemoDigitsPicker: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DigitsPicker
        x={3}
        n={4}
        onSelect={(x) => {
          console.log(x);
        }}
      />
    </div>
  );
};

export default DemoDigitsPicker;

let styleContainer = null;
