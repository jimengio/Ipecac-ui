import React, { FC } from "react";
import { css } from "emotion";
import { Progress } from "../../src";

let DemoProgress: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <Progress percentage={30} />
    </div>
  );
};

export default DemoProgress;

let styleContainer = null;
