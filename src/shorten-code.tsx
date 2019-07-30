import React, { FC } from "react";
import { css } from "emotion";
import { lingual } from "./lingual";

let ShortenCode: FC<{
  code: string;
  /** defaults to 15 */
  maxLength?: string;
  className?: string;
}> = (props) => {
  if (props.code == null) {
    return <span>{lingual.symbolEmpty}</span>;
  }
  let maxLength = props.maxLength || 15;
  let len = props.code.length;
  let code = props.code;
  if (len > maxLength && len > 10) {
    code = `${props.code.slice(0, 5)}...${props.code.slice(len - 5)}`;
  }

  /** Methods */
  /** Effects */
  /** Renderers */
  return <span className={props.className}>{code}</span>;
};

export default ShortenCode;
