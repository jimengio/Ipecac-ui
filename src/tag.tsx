import React from "react";
import { css, cx } from "emotion";
import { EStatusColors } from "./types";

type Statuses = "success" | "processing" | "waiting" | "error";

interface IProps {
  status: Statuses;
  className?: string;
  style?: React.CSSProperties;
  clickable?: boolean;
  onClick?(): void;
}

const Tag: React.FC<IProps> = (props) => {
  const statusClassName: string = statusClassNameMap[props.status];

  return (
    <span
      className={cx(styleContainer, statusClassName, props.className)}
      style={props.style}
      onClick={(e) => {
        e.stopPropagation();

        if (props.clickable && props.onClick != null) {
          props.onClick();
        }
      }}
    >
      {props.children}
    </span>
  );
};

export default Tag;

const styleContainer = css`
  display: inline-flex;
  line-height: 1;
  padding: 5px 10px;
  font-size: 12px;
  color: #fff;
  border-radius: 4px;
`;

const statusClassNameMap: { [K in Statuses]: string } = {
  success: css`
    background-color: ${EStatusColors.Success};
  `,
  error: css`
    background-color: ${EStatusColors.Error};
  `,
  waiting: css`
    background-color: ${EStatusColors.Waiting};
  `,
  processing: css`
    background-color: ${EStatusColors.Processing};
  `,
};
