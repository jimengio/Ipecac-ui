import React, { FC, useState } from "react";
import { css } from "emotion";
import Tabs, { ITab } from "../../src/tabs";

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
      <Tabs
        tabs={tabs}
        onSelect={(k) => {
          setSelected(k);
        }}
        selected={selected}
      />
    </div>
  );
};

export default DemoTabs;

let styleContainer = null;
