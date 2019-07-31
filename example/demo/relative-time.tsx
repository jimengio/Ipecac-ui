import dayjs from "dayjs";
import React, { FC } from "react";
import { css } from "emotion";
import RelativeTime from "../../src/relative-time";

let DemoRelativeTime: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <RelativeTime
        startedTime={dayjs()
          .startOf("day")
          .toDate()}
      />
    </div>
  );
};

export default DemoRelativeTime;

let styleContainer = null;
