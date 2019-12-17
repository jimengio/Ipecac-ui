import React, { FC } from "react";
import { css } from "emotion";
import CheckResult from "../../src/check-result";
import { DocDemo } from "@jimengio/doc-frame";

let DemoCheckResult: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Results">
        <div>
          <CheckResult good />
          <CheckResult good={false} />
          <CheckResult good={false} unknown />
        </div>
        <div>
          <CheckResult good name="NAME" />
        </div>
      </DocDemo>
    </div>
  );
};

export default DemoCheckResult;

let styleContainer = null;
