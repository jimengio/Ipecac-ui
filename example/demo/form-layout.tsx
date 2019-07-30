import React, { FC } from "react";
import { css, cx } from "emotion";
import FormLayout, { ButtonsAtBottom, IFormLayoutItem, FormLayoutInput, FormLayoutVertical } from "../../src/form-layout";
import { fullscreen, column, flex } from "@jimengio/shared-utils";
import Space from "../../src/space";

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
      <div className={flex}>
        <FormLayout title={"TITLE"} items={items} />
        <Space height={40} />
        <FormLayoutVertical items={items} />
      </div>
      <ButtonsAtBottom onConfirm={() => {}} onCancel={() => {}} />
    </div>
  );
};

export default DemoFormLayout;

let styleContainer = null;
