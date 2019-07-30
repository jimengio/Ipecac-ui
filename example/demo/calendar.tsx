import React, { FC } from "react";
import { css } from "emotion";
import Calendar from "../../src/calendar";
import { DateTime } from "luxon";

let DemoCalendar: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <Calendar
        date={DateTime.fromJSDate(new Date())}
        onSelect={(x) => {
          console.log(x);
        }}
      />
    </div>
  );
};

export default DemoCalendar;

let styleContainer = null;
