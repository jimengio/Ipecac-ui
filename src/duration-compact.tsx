import React, { SFC } from "react";
import { padStart } from "lodash-es";
import { formatString, lingual } from "./lingual";
import { css } from "emotion";

let pad0 = (x: number) => padStart(`${x}`, 2, "0");

let DurationCompact: SFC<{ duration: number }> = (props) => {
  let text: string;

  let d = props.duration;

  let seconds = d % 60;

  // into minutes
  d = (d - seconds) / 60;

  let minutes = d % 60;

  // into hours
  d = (d - minutes) / 60;

  let hours = d % 24;

  // into days
  d = (d - hours) / 24;

  let days = d;
  if (days > 0) {
    text = formatString(lingual.xDaysYHoursZMinutes, {
      x: pad0(days),
      y: pad0(hours),
      z: pad0(minutes),
    });
  } else if (hours > 0) {
    text = formatString(lingual.xHoursYMinutes, {
      x: pad0(hours),
      y: pad0(minutes),
    });
  } else {
    text = formatString(lingual.xMinutes, {
      x: pad0(minutes),
    });
  }

  return <div className={styleContainer}>{text}</div>;
};

export default DurationCompact;

let styleContainer = css`
  background-color: hsla(100, 77%, 44%, 1);
  color: white;
  display: inline-block;
  line-height: 40px;
  padding: 0 16px;
  font-size: 22px;
`;
