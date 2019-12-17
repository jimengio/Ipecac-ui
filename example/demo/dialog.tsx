import React, { FC, useState } from "react";
import { css } from "emotion";
import Dialog from "../../src/dialog";
import { DocDemo } from "@jimengio/doc-frame";

let DemoDialog: FC<{}> = (props) => {
  let [visible, setVisible] = useState(false);

  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Dialog">
        <a onClick={() => setVisible(true)}>Open</a>
      </DocDemo>
      {visible ? <Dialog title={"TITLE"} content={"CONTENT"} onClose={() => setVisible(false)} /> : null}
    </div>
  );
};

export default DemoDialog;

let styleContainer = null;
