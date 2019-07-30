import React, { FC, useState, useEffect } from "react";
import { css } from "emotion";
import useInterval from "@use-it/interval";
import { formatString, lingual } from "./lingual";

let RelativeTime: FC<{ startedTime: Date; className?: string }> = (props) => {
  let [diffSeconds, setDiff] = useState(0);

  let diffInMins = diffSeconds / 60;
  let diffInHours = Math.floor(diffInMins / 60);
  let minsPart = Math.floor(diffInMins % 60);

  let time: string;
  if (diffInHours > 0) {
    time = formatString(lingual.xHoursYMinutes, {
      x: `${diffInHours}`,
      y: `${minsPart}`,
    });
  } else {
    // 特殊规则, 如果不到一分钟, 还是显示一个 1
    if (minsPart === 0) {
      minsPart = 1;
    }

    time = formatString(lingual.xMinutes, { x: `${minsPart}` });
  }

  /** Methods */

  let checkTime = () => {
    let now = Date.now();
    let started = props.startedTime.valueOf();
    setDiff((now - started) / 1000);
  };

  /** Effects */

  useInterval(checkTime, 10000); // 默认 10s 检查一次

  useEffect(checkTime, []);

  /** Renderers */
  return <span className={styleContainer}>{time}</span>;
};

export default RelativeTime;

let styleContainer = null;
