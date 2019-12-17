import React, { FC } from "react";
import { css } from "emotion";
import EventTip from "../../src/event-tip";
import { DocDemo } from "@jimengio/doc-frame";

let DemoEventTip: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Tip">
        <EventTip kind={"scan"} />
      </DocDemo>
    </div>
  );
};

export default DemoEventTip;

let styleContainer = null;
