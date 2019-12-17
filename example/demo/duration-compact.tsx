import React, { SFC } from "react";
import { css } from "emotion";
import DurationCompact from "../../src/duration-compact";
import { DocDemo } from "@jimengio/doc-frame";

let DemoDurationCompact: SFC<{}> = (props) => {
  return (
    <div>
      <DocDemo title="Durations">
        <div className={styleCase}>
          <DurationCompact duration={1} />
        </div>
        <div className={styleCase}>
          <DurationCompact duration={100} />
        </div>
        <div className={styleCase}>
          <DurationCompact duration={10000} />
        </div>
        <div className={styleCase}>
          <DurationCompact duration={3600 - 1} />
        </div>
        <div className={styleCase}>
          <DurationCompact duration={1000000} />
        </div>
        <div className={styleCase}>
          <DurationCompact duration={100000000} />
        </div>
      </DocDemo>
    </div>
  );
};

export default DemoDurationCompact;

let styleCase = css`
  padding: 16px;
`;
