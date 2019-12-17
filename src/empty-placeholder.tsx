import { expand, row, column, rowParted, fullHeight, center } from "@jimengio/flex-styles";
import React, { FC } from "react";
import { css, cx } from "emotion";
import JimoIcon, { EJimoIcon } from "@jimengio/jimo-icons";
import { lingual } from "./lingual";

let EmptyPlaceholder: FC<{
  text?: string;
}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(expand, center, styleEmpty)}>
      <JimoIcon name={EJimoIcon.emptyData} className={styleEmptyIcon} />
      <div className={styleEmptyText}>{props.text || lingual.noData}</div>
    </div>
  );
};

export default EmptyPlaceholder;

let styleEmpty = css`
  background: rgba(235, 249, 255, 1);
`;
let styleEmptyIcon = css`
  font-size: 160px;
  color: hsla(203, 28%, 27%, 1);
`;

let styleEmptyText = css`
  font-size: 24px;
  color: rgba(50, 74, 89, 1);
`;
