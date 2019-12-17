import React, { FC, useState } from "react";
import { css } from "emotion";
import Checkbox from "../../src/checkbox";
import { DocDemo } from "@jimengio/doc-frame";

let DemoCheckbox: FC<{}> = (props) => {
  let [checked, setChecked] = useState(false);
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Checkbox">
        <div className={styleBlock}>
          <Checkbox checked={true} onChange={null} />
        </div>
        <div className={styleBlock}>
          <Checkbox checked={false} onChange={null} />
        </div>
        <div className={styleBlock}>
          <Checkbox checked={checked} onChange={setChecked} />
        </div>
      </DocDemo>
    </div>
  );
};

export default DemoCheckbox;

let styleContainer = null;

let styleBlock = css`
  padding: 20px;
`;
