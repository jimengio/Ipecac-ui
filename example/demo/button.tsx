import React, { FC } from "react";
import { css } from "emotion";
import Button from "../../src/button";
import { DocDemo } from "@jimengio/doc-frame";
import { Space } from "@jimengio/flex-styles";

let DemoButtons: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Buttons">
        <div>
          <Button>DEMO</Button>
        </div>

        <Space height={16} />

        <div>
          <Button inverse>DEMO</Button>
        </div>
      </DocDemo>
    </div>
  );
};

export default DemoButtons;

let styleContainer = css`
  padding: 10px;
`;
