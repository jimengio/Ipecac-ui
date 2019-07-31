import React, { FC } from "react";
import { css } from "emotion";
import EmptyPlaceholder from "../../src/empty-placeholder";

let DemoEmptyPlaceholder: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <EmptyPlaceholder />
    </div>
  );
};

export default DemoEmptyPlaceholder;

let styleContainer = null;
