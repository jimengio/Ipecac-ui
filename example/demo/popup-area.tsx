import React, { SFC, useState } from "react";
import PopupArea from "../../src/popup-area";
import Button from "../../src/button";
import { center } from "@jimengio/flex-styles";
import PopupWarning from "../../src/popup-warning";
import { EJimoIcon } from "@jimengio/jimo-icons";
import { css } from "emotion";
import { DocDemo } from "@jimengio/doc-frame";

let DemoPopupArea: SFC<{}> = (props) => {
  let [visible, setVisible] = useState(false);

  let [showWarning, setShowWarning] = useState(false);

  return (
    <div className={""}>
      <div>
        <DocDemo title="Popup">
          <a
            className={styleButton}
            onClick={() => {
              setVisible(true);
            }}
          >
            Toggle
          </a>
        </DocDemo>

        <DocDemo title="Popup warning">
          <a
            className={styleButton}
            onClick={() => {
              setShowWarning(true);
            }}
          >
            Toggle Warning
          </a>
        </DocDemo>

        <PopupArea
          visible={visible}
          renderContent={() => {
            return (
              <div className={center}>
                <div>{"SOME CONTTENT"}</div>
                <Button
                  inverse
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  {"BUTTON"}
                </Button>
              </div>
            );
          }}
        />

        <PopupWarning visible={showWarning} icon={EJimoIcon.warehouseCheck} text={"TEXT"} onClose={() => setShowWarning(false)} />
      </div>
    </div>
  );
};

export default DemoPopupArea;

let styleButton = css`
  margin: 20px;
  display: inline-block;
`;
