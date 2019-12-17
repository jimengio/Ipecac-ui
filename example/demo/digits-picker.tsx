import React, { FC } from "react";
import { css } from "emotion";
import DigitsPicker from "../../src/digits-picker";
import { DocDemo } from "@jimengio/doc-frame";

let DemoDigitsPicker: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Picker">
        <DigitsPicker
          x={3}
          n={4}
          onSelect={(x) => {
            console.log(x);
          }}
        />
      </DocDemo>
    </div>
  );
};

export default DemoDigitsPicker;

let styleContainer = null;
