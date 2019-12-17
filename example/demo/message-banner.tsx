import React, { FC } from "react";
import { css } from "emotion";
import MessageBanner from "../../src/message-banner";
import { EMessageKind } from "../../src/message-banner";
import { DocDemo } from "@jimengio/doc-frame";

let DemoMessageBanner: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <DocDemo title="Banner">
        <MessageBanner message={"SUCCESS"} kind={EMessageKind.Success} />
      </DocDemo>
      <DocDemo title="Banner">
        <MessageBanner message={"Failure"} kind={EMessageKind.Failure} />
      </DocDemo>
      <DocDemo title="Banner">
        <MessageBanner message={"Normal"} kind={EMessageKind.Normal} />
      </DocDemo>
    </div>
  );
};

export default DemoMessageBanner;

let styleContainer = null;
