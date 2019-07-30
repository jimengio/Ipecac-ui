import React, { FC, useState } from "react";
import { css } from "emotion";
import Checkbox from "../../src/checkbox";

let DemoCheckbox: FC<{}> = (props) => {
  let [checked, setChecked] = useState(false);
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <div className={styleBlock}>
        <Checkbox checked={true} onChange={null} />
      </div>
      <div className={styleBlock}>
        <Checkbox checked={false} onChange={null} />
      </div>
      <div className={styleBlock}>
        <Checkbox checked={checked} onChange={setChecked} />
      </div>
    </div>
  );
};

export default DemoCheckbox;

let styleContainer = null;

let styleBlock = css`
  padding: 20px;
`;
