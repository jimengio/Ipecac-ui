import React, { FC } from "react";
import { css } from "emotion";
import Button from "../../../src/buttons";

let DemoButtons: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <Button>DEMO</Button>
      <Button inverse>DEMO</Button>
    </div>
  );
};

export default DemoButtons;

let styleContainer = css`
  padding: 10px;
`;
