import React, { useState, FC } from "react";
import { css, cx } from "emotion";
import { row } from "@jimengio/shared-utils";

import QrReader from "react-qr-reader";

let hintError = () => {
  return `Current host ${location.host} is neither HTTPS nor localhost.`;
};

let QrCodePopup: FC<{
  onDetect: (code: string) => void;
  delay?: number;
  onError?: (error) => void;
  cardClassName?: string;
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
          className={cx(row, styleEditingArea, props.cardClassName)}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <QrReader
            delay={props.delay || 500}
            onError={(error) => {
              console.error("QrReader error:", error);
              setError(error.toString());
              if (props.onError != null) {
                props.onError(error);
              }
            }}
            onScan={(code: string) => {
              if (code != null) {
                props.onDetect(code);
                setEditing(false);
              }
            }}
            style={{ width: "100%" }}
          />
          {scanError != null ? (
            <div className={styleError}>
              <div>{scanError}</div>
              <div>{hintError()}</div>
            </div>
          ) : null}
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
      {props.children || <a href="javascript: void 0">Click to scan QR code!</a>}

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
  bottom: 0;
  left: 0%;
  position: absolute;
  padding: 16px;
  color: red;
  font-size: 16px;
  background-color: hsla(0, 0%, 20%, 0.9);
  z-index: 20;
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
