import React, { FC } from "react";
import { css } from "emotion";
import { CheckResult } from "../../src";

let DemoCheckResult: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <div>
        <CheckResult good />
        <CheckResult good={false} />
        <CheckResult good={false} unknown />
      </div>
      <div>
        <CheckResult good name="NAME" />
      </div>
    </div>
  );
};

export default DemoCheckResult;

let styleContainer = null;
