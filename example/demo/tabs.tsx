import React, { FC, useState } from "react";
import { css } from "emotion";
import Tabs, { ITab } from "../../src/tabs";
import { DocDemo } from "@jimengio/doc-frame";

let tabs: ITab[] = [
  {
    value: "A",
    title: "A",
  },
  {
    value: "B",
    title: "B",
  },
];

let DemoTabs: FC<{}> = (props) => {
  let [selected, setSelected] = useState("A");
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Tabs">
        <Tabs
          tabs={tabs}
          onSelect={(k) => {
            setSelected(k);
          }}
          selected={selected}
        />
      </DocDemo>
    </div>
  );
};

export default DemoTabs;

let styleContainer = null;
