import React, { FC } from "react";
import { css } from "emotion";
import Pagination from "../../src/pagination";

let DemoPagination: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <Pagination
        total={22}
        size={10}
        current={1}
        onChange={(x) => {
          console.log(x);
        }}
      />
      <Pagination
        total={77}
        size={10}
        current={5}
        onChange={(x) => {
          console.log(x);
        }}
      />

      <Pagination
        total={177}
        size={10}
        current={5}
        onChange={(x) => {
          console.log(x);
        }}
      />
    </div>
  );
};

export default DemoPagination;

let styleContainer = null;
