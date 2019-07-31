import React, { FC } from "react";
import { css } from "emotion";
import MessageBanner from "../../src/message-banner";
import { EMessageKind } from "../../src/message-banner";

let DemoMessageBanner: FC<{}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={styleContainer}>
      <MessageBanner message={"SUCCESS"} kind={EMessageKind.Success} />
      <MessageBanner message={"Failure"} kind={EMessageKind.Failure} />
      <MessageBanner message={"Normal"} kind={EMessageKind.Normal} />
    </div>
  );
};

export default DemoMessageBanner;

let styleContainer = null;
