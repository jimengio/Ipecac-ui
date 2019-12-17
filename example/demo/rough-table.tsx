import React, { FC } from "react";
import { css } from "emotion";
import RoughTable from "../../src/rough-table";
import { DocDemo } from "@jimengio/doc-frame";

let DemoRoughTable: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Table">
        <RoughTable
          dataSource={[{}, {}]}
          labels={["a", "b"]}
          renderColumns={(record) => {
            return ["a", "b"];
          }}
        />
      </DocDemo>
    </div>
  );
};

export default DemoRoughTable;

let styleContainer = null;
