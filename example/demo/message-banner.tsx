import React, { FC } from "react";
import { css } from "emotion";
import { MessageBanner } from "../../src";
import { MessageKind } from "../../src/message-banner";

let DemoMessageBanner: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <MessageBanner message={"SUCCESS"} kind={MessageKind.Success} />
      <MessageBanner message={"Failure"} kind={MessageKind.Failure} />
      <MessageBanner message={"Normal"} kind={MessageKind.Normal} />
    </div>
  );
};

export default DemoMessageBanner;

let styleContainer = null;
