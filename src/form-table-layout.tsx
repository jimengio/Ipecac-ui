import React, { FC, ReactNode } from "react";
import { css, cx } from "emotion";
import { row, flex, expand, rowMiddle } from "@jimengio/shared-utils";

type ComponentTableLayout<T = any> = FC<{
  titles: string[];
  data: T[];
  renderColumn: (item: T) => ReactNode[];
}>;

let FormTableLayout: ComponentTableLayout = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <div className={cx(row, styleRow, styleHeader)}>
        {props.titles.map((title, idx) => {
          return (
            <div className={cx(expand, rowMiddle, styleCell)} key={idx}>
              {title}
            </div>
          );
        })}
      </div>
      {props.data.map((item, idx) => {
        let cols = props.renderColumn(item);
        return (
          <div className={cx(row, styleRow)} key={idx}>
            {cols.map((col, j) => {
              return (
                <div key={j} className={cx(expand, rowMiddle, styleCell)}>
                  {col}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default FormTableLayout;

let styleContainer = null;

let styleHeader = css`
  background-color: hsla(203, 28%, 27%, 1);
  color: white;
`;

let styleRow = css`
  border-bottom: 1px solid black;
  height: 60px;
  color: hsla(203, 28%, 27%, 1);
`;

let styleCell = css`
  font-size: 20px;
  padding: 0 20px;
`;
