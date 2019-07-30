import React, { FC } from "react";
import { css } from "emotion";
import FormTableLayout from "../../src/form-table-layout";
import { FormLayoutInput, FormButtons } from "../../src/form-layout";
import Space from "../../src/space";

let data = [{}, {}, {}];

let DemoFormTableLayout: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <FormTableLayout
        titles={["A", "B", "C"]}
        data={data}
        renderColumn={(item) => {
          return ["A", "B", <FormLayoutInput value={"demo"} />];
        }}
      />

      <Space height={40} />

      <FormButtons onCancel={null} onConfirm={null} />
    </div>
  );
};

export default DemoFormTableLayout;

let styleContainer = css`
  padding: 80px 20px;
`;
