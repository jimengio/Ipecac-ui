import React, { useState, FC } from "react";
import { css, cx } from "emotion";
import { immerHelpers, ImmerStateFunc, MergeStateFunc } from "@jimengio/shared-utils";
import FaIcon, { EFaIcon } from "@jimengio/fa-icons";
import { row } from "@jimengio/shared-utils";

import QrReader from "react-qr-reader";

let QrCodePopup: FC<{
  onDetect: (code: string) => void;
}> = React.memo((props) => {
  let [isEditing, setEditing] = useState(false);
  let [scanError, setError] = useState(null);

  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  let renderEditor = () => {
    return (
      <div
        className={shellStylePopupBackground}
        onClick={(event) => {
          event.stopPropagation();
          setEditing(false);
        }}
      >
        <div
          className={cx(row, styleEditingArea)}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {scanError != null ? <span className={styleError}>{scanError}</span> : null}
          <QrReader
            delay={500}
            onError={(error) => {
              console.error("QrReader error:", error);
              setError(error.toString());
            }}
            onScan={(code: string) => {
              if (code != null) {
                props.onDetect(code);
                setEditing(false);
              }
            }}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    );
  };

  return (
    <span
      onClick={() => {
        setEditing(true);
      }}
    >
      <FaIcon name={EFaIcon.Qrcode} />

      {isEditing ? renderEditor() : null}
    </span>
  );
});

export default QrCodePopup;

const styleEditingArea = css`
  margin: 48px auto;
  display: inline-flex;
  background-color: white;
  border: 4px solid #a88;
  width: 320px;
  height: 320px;

  position: relative;
`;

const styleError = css`
  padding: 16px;
  color: red;
  font-size: 16px;
`;

const styleClose = css`
  position: absolute;
  top: 8px;
  right: 8px;
  color: white;
  z-index: 200;
  font-size: 16px;
`;

export const shellStylePopupBackground = css`
  position: fixed;
  min-height: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  background-color: hsla(0, 0%, 0%, 0.4);
  padding: 16px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
