import React, { FC } from "react";
import { css } from "emotion";
import Pagination from "../../src/pagination";
import { DocDemo } from "@jimengio/doc-frame";

let DemoPagination: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Pagination">
        <Pagination
          total={22}
          size={10}
          current={1}
          onChange={(x) => {
            console.log(x);
          }}
        />
      </DocDemo>

      <DocDemo title="Pagination">
        <Pagination
          total={77}
          size={10}
          current={5}
          onChange={(x) => {
            console.log(x);
          }}
        />
      </DocDemo>

      <DocDemo title="Pagination">
        <Pagination
          total={177}
          size={10}
          current={5}
          onChange={(x) => {
            console.log(x);
          }}
        />
      </DocDemo>
    </div>
  );
};

export default DemoPagination;

let styleContainer = null;
