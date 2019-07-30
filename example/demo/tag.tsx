import React, { FC } from "react";
import { css } from "emotion";
import { Tag } from "../../src";

let DemoTag: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <Tag status={"processing"}>DEMO</Tag>
      <Tag status={"waiting"}>DEMO</Tag>
      <Tag status={"success"}>DEMO</Tag>
      <Tag status={"error"}>DEMO</Tag>
    </div>
  );
};

export default DemoTag;

let styleContainer = null;
