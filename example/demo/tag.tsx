import React, { FC } from "react";
import { css } from "emotion";
import Tag from "../../src/tag";
import { DocDemo } from "@jimengio/doc-frame";

let DemoTag: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Tags">
        <Tag status={"processing"}>DEMO</Tag>
        <Tag status={"waiting"}>DEMO</Tag>
        <Tag status={"success"}>DEMO</Tag>
        <Tag status={"error"}>DEMO</Tag>
      </DocDemo>
    </div>
  );
};

export default DemoTag;

let styleContainer = null;
