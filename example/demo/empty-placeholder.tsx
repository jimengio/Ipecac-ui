import React, { FC } from "react";
import { css } from "emotion";
import EmptyPlaceholder from "../../src/empty-placeholder";
import { DocDemo } from "@jimengio/doc-frame";

let DemoEmptyPlaceholder: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Placeholder">
        <EmptyPlaceholder />
      </DocDemo>
    </div>
  );
};

export default DemoEmptyPlaceholder;

let styleContainer = null;
