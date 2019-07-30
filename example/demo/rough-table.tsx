import React, { FC } from "react";
import { css } from "emotion";
import RoughTable from "../../src/rough-table";

let DemoRoughTable: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <RoughTable
        dataSource={[{}, {}]}
        labels={["a", "b"]}
        renderColumns={(record) => {
          return ["a", "b"];
        }}
      />
    </div>
  );
};

export default DemoRoughTable;

let styleContainer = null;
