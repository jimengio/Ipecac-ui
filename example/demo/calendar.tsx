import React, { FC } from "react";
import { css } from "emotion";
import Calendar from "../../src/calendar";
import { DateTime } from "luxon";
import { DocDemo } from "@jimengio/doc-frame";

let DemoCalendar: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Calendar">
        <Calendar
          date={DateTime.fromJSDate(new Date())}
          onSelect={(x) => {
            console.log(x);
          }}
        />
      </DocDemo>
    </div>
  );
};

export default DemoCalendar;

let styleContainer = null;
