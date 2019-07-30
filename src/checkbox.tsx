import React, { FC } from "react";
import { css, cx } from "emotion";
import JimoIcon, { EJimoIcon } from "@jimengio/jimo-icons";
import { center } from "@jimengio/shared-utils";

let Checkbox: FC<{
  checked: boolean;
  onChange: (checked: boolean) => void;
}> = (props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  if (props.checked) {
    return (
      <div className={cx(styleContainer, center, styleChecked)} onClick={() => props.onChange(false)}>
        <JimoIcon name={EJimoIcon.tick} />
      </div>
    );
  } else {
    return <div className={styleContainer} onClick={() => props.onChange(true)}></div>;
  }
};

export default Checkbox;

let styleContainer = css`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 4px solid rgba(103, 127, 137, 1);
  transition-duration: 200ms;
  font-size: 24px;
  color: white;
`;

let styleChecked = css`
  background-color: hsla(198, 14%, 47%, 1);
`;
