import React, { FC } from "react";
import { css } from "emotion";
import { EventTip } from "../../src";

let DemoEventTip: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <EventTip kind={"scan"} />
    </div>
  );
};

export default DemoEventTip;

let styleContainer = null;
