import React, { FC } from "react";
import { css } from "emotion";
import FormTableLayout from "../../src/form-table-layout";
import { FormLayoutInput, FormButtons } from "../../src/form-layout";
import Space from "../../src/space";
import { DocDemo } from "@jimengio/doc-frame";

let data = [{}, {}, {}];

let DemoFormTableLayout: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Form table">
        <FormTableLayout
          titles={["A", "B", "C"]}
          data={data}
          renderColumn={(item) => {
            return ["A", "B", <FormLayoutInput value={"demo"} />];
          }}
        />
      </DocDemo>

      <DocDemo title="Buttons">
        <FormButtons onCancel={null} onConfirm={null} />
      </DocDemo>
    </div>
  );
};

export default DemoFormTableLayout;

let styleContainer = css`
  padding: 80px 20px;
`;
