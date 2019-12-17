import React, { FC } from "react";
import { css } from "emotion";
import InformationRows, { IInformationItem, EInformationItemType } from "../../src/information-rows";
import { center } from "@jimengio/flex-styles";
import { DocDemo } from "@jimengio/doc-frame";

let DemoInformationRows: FC<{}> = (props) => {
  let items: IInformationItem[] = [
    {
      label: "DEMO",
      value: "DEMO",
    },
    {
      type: EInformationItemType.Custom,
      label: "CUSTOM",
      noUnderline: true,
      render: () => {
        return <div className={center}>XXX</div>;
      },
    },
  ];

  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Informations">
        <div className={styleArea}>
          <InformationRows title="DEMO" items={items} />
        </div>
      </DocDemo>
    </div>
  );
};

export default DemoInformationRows;

let styleContainer = null;

let styleArea = css`
  width: 300px;
  background-color: hsla(198, 100%, 96%, 1);
`;
