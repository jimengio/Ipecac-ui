import React, { FC, useState } from "react";
import { css } from "emotion";
import { DocDemo } from "@jimengio/doc-frame";
import QrCodePopup from "../../src/qrcode-popup";
import { Space } from "@jimengio/flex-styles";

let DemoQRCodePopup: FC<{}> = React.memo((props) => {
  let [code, setCode] = useState(null);

  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocDemo title="QRCode">
        <div>Code is: {code || "-"}</div>
        <Space height={16} />
        <QrCodePopup
          onDetect={(code) => {
            setCode(code);
          }}
        />
      </DocDemo>
    </div>
  );
});

export default DemoQRCodePopup;
