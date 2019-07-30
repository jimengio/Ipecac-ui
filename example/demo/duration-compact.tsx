import React, { SFC } from "react";
import { css } from "emotion";
import DurationCompact from "../../src/duration-compact";

let DemoDurationCompact: SFC<{}> = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default DemoDurationCompact;

let styleCase = css`
  padding: 16px;
`;
