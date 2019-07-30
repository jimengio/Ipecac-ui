import React, { FC, ReactNode } from "react";
import { css, cx } from "emotion";
import { Theme, ISimpleObject } from "./types";

let RoughTable: FC<{
  dataSource: ISimpleObject[];
  labels?: (string | ReactNode)[];
  columnStyles?: string[];
  renderColumns: (record: any, index: number) => (string | ReactNode)[];
  rowKey?: string;
  className?: string;
  rowClassName?: string;
  cellClassName?: string;
}> = (props) => {
  let columnStyles = props.columnStyles || [];
  return (
    <table className={cx(styleTable, props.className)}>
      <thead>
        <tr className={cx(styleRow, props.rowClassName)}>
          {props.labels.map((label, idx) => {
            return (
              <td key={idx} className={cx(styleCell, props.cellClassName, styleTHead, columnStyles[idx])}>
                {label}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.dataSource.map((record, idx) => {
          let hasBg = idx % 2 === 1;
          let cells = props.renderColumns(record, idx);
          return (
            <tr key={idx} className={cx(styleRow, props.rowClassName, hasBg ? styleDimBg : null)}>
              {cells.map((cell, idx) => {
                return (
                  <td key={idx} className={cx(styleCell, props.cellClassName, columnStyles[idx])}>
                    {cell}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RoughTable;

const styleCell = css`
  vertical-align: middle;
  color: ${Theme.Dark};
  line-height: 40px;
  padding: 0 10px;
  font-size: 16px;
`;

const styleTHead = css`
  font-size: 16px;
  background-color: hsla(203, 28%, 27%, 1);
  color: white;
`;

const styleTable = css`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const styleRow = null;

let styleDimBg = css`
  background-color: hsla(198, 100%, 96%, 1);
`;
