import React, { FC, ReactNode } from "react";
import { cx, css } from "emotion";
import { rowParted, flex, column } from "@jimengio/shared-utils";
import Space from "./space";

export let InformationRow: FC<{ label: ReactNode; value: ReactNode; noUnderline?: boolean; valueClassName?: string }> = (props) => {
  return (
    <div className={cx(rowParted, styleInfoRow, props.noUnderline ? styleNoUnderline : null)}>
      <span className={stylInfoLabel}>{props.label}</span>
      <Space width={16} />
      <span className={cx(styleValue, props.valueClassName)}>{props.value}</span>
    </div>
  );
};

export let RawMaterialRow: FC<{ label: string; value: string }> = (props) => {
  return (
    <div className={cx(rowParted, styleRawMaterialRow)}>
      <span>{props.label}</span>
      <Space width={16} />
      <span className={cx(styleValue)}>{props.value}</span>
    </div>
  );
};

export let InformationTitle: FC<{ title: string; underline?: boolean }> = (props) => {
  return <div className={cx(styleInfoHeader, props.underline ? styleUnderline : null)}>{props.title}</div>;
};

export enum EInformationItemType {
  Basic,
  Custom,
}

interface IInformationItemBasic {
  type?: EInformationItemType.Basic;
  label: ReactNode;
  value: ReactNode;
  noUnderline?: boolean;
  valueClassName?: string;
}

interface IInformationItemCustom {
  type?: EInformationItemType.Custom;
  label: ReactNode;
  noUnderline?: boolean;
  render?: () => ReactNode;
}

export type IInformationItem = IInformationItemBasic | IInformationItemCustom;

let InformationRows: FC<{
  title?: string;
  items: IInformationItem[];
}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      {props.title != null ? <InformationTitle title={props.title} underline={true} /> : null}
      <div className={styleListContainer}>
        {props.items.map((item, idx) => {
          if (item.type === EInformationItemType.Custom) {
            return (
              <div key={idx} className={cx(column, styleInfoArea, item.noUnderline ? styleNoUnderline : null)}>
                <span className={stylInfoLabel}>{item.label}</span>
                <Space height={16} />
                <span>{item.render()}</span>
              </div>
            );
          }
          return <InformationRow key={idx} valueClassName={item.valueClassName} label={item.label} value={item.value} />;
        })}
      </div>
    </div>
  );
};

export default InformationRows;

let styleContainer = null;

let styleInfoRow = css`
  border-bottom: 1px solid hsla(198, 14%, 47%, 1);
  line-height: 40px;
  align-items: flex-start;
  font-size: 16px;
  flex-wrap: wrap;
`;

let styleInfoArea = css`
  border-bottom: 1px solid hsla(198, 14%, 47%, 1);
  line-height: 40px;
  font-size: 16px;
`;

let styleRawMaterialRow = css`
  line-height: 32px;
  align-items: flex-start;
  font-size: 16px;
  flex-wrap: wrap;
`;

let stylInfoLabel = css`
  font-size: 16px;
  color: rgba(103, 127, 137, 1);
`;

let styleInfoHeader = css`
  padding: 0 20px;
  color: rgba(103, 127, 137, 1);
  font-size: 18px;
  line-height: 48px;
  font-weight: bold;
`;

let styleUnderline = css`
  border-bottom: 2px solid hsla(198, 14%, 47%, 1);
`;

let styleNoUnderline = css`
  border-bottom: none;
`;

let styleValue = css`
  overflow: visible;
`;

let styleListContainer = css`
  padding: 0 20px;
`;
