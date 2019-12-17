import dayjs from "dayjs";
import React, { FC } from "react";
import { css } from "emotion";
import RelativeTime from "../../src/relative-time";
import { DocDemo } from "@jimengio/doc-frame";

let DemoRelativeTime: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Time">
        <RelativeTime
          startedTime={dayjs()
            .startOf("day")
            .toDate()}
        />
      </DocDemo>
    </div>
  );
};

export default DemoRelativeTime;

let styleContainer = null;
