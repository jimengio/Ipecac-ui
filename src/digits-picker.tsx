import React from "react";
import { range } from "lodash-es";
import { css, cx } from "emotion";
import { Theme } from "./types";

interface IProps {
  x: number;
  n: number;
  onSelect: (date: Date) => void;
}

export default class DigitsPicker extends React.Component<IProps, any> {
  _focusedElement: Element;

  render() {
    return (
      <div className={cx(styleContainer)}>
        {range(0, this.props.n).map((n) => {
          return (
            <div
              key={n}
              className={cx(styleRow, n === this.props.x ? styleSelected : null)}
              onClick={this.onSelect.bind(this, n)}
              ref={(focusedElement) => {
                if (n === this.props.x) {
                  // selected
                  this._focusedElement = focusedElement;
                }
              }}
            >
              {this.format2(n)}
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this._focusedElement.scrollIntoView();
  }

  format2(n) {
    return n < 10 ? `0${n}` : String(n);
  }

  onSelect(n) {
    this.props.onSelect(n);
  }
}

const styleContainer = css`
  height: 440px;
  width: 100px;
  border: 1px solid ${Theme.Dark};
  border-radius: 5px;
  overflow: auto;
`;

const styleRow = css`
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
`;

const styleSelected = css`
  background-color: ${Theme.Dark};
  color: white;
`;
