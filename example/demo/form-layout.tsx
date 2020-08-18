import React, { FC } from "react";
import { css, cx } from "emotion";
import FormLayout, { ButtonsAtBottom, IFormLayoutItem, FormLayoutInput, FormLayoutVertical } from "../../src/form-layout";
import { fullscreen, column } from "@jimengio/flex-styles";
import Space from "../../src/space";
import { DocDemo } from "@jimengio/doc-frame";

let DemoFormLayout: FC<{}> = (props) => {
  let items: IFormLayoutItem[] = [
    {
      label: "DEMO",
      render: () => {
        return <FormLayoutInput value={"DEMO"} onClick={() => {}} />;
      },
    },
    {
      label: "DEMO",
      error: "不可以为空",
      render: () => {
        return <FormLayoutInput value={null} placeholder={"PLEASE INPUT"} onClick={() => {}} />;
      },
    },
    {
      label: (
        <div>
          <div>A</div>
          <div>B</div>
        </div>
      ),
      render: () => {
        return <FormLayoutInput larger value={"DEMO"} onClick={() => {}} />;
      },
    },
  ];

  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(column, styleContainer)}>
      <DocDemo title="Layout">
        <FormLayout title={"TITLE"} items={items} />
      </DocDemo>

      <DocDemo title="Vertical layout">
        <FormLayoutVertical items={items} />
      </DocDemo>

      <DocDemo title="Buttons">
        <ButtonsAtBottom onConfirm={() => {}} onCancel={() => {}} />
      </DocDemo>
    </div>
  );
};

export default DemoFormLayout;

let styleContainer = null;
