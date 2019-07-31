import range from "lodash/range";
import React from "react";
import { css, cx } from "emotion";

import FaIcon from "@jimengio/fa-icons";
import { Theme } from "./types";

import { EFaIcon } from "@jimengio/fa-icons";
import * as layout from "@jimengio/shared-utils";

interface IProps {
  total: number;
  size: number;
  current: number;
  onChange: (n: number) => void;
}

export default class Pagination extends React.Component<IProps, any> {
  render() {
    return <div className={layout.rowCenter}>{this.renderButtons()}</div>;
  }

  renderButtons() {
    let count = Math.ceil(this.props.total / this.props.size);
    if (count <= 7) {
      return this.renderAll(count);
    }
    // for example 0 1 2 3, 3 - 0 = 3, if the difference is larger, need to collapse
    if (this.props.current < 4) {
      return this.renderCollapseRight(count);
    }
    // for example 4 5 6 7, 7 - 4 = 3, if the difference is larger, need to collapse
    if (count - this.props.current < 4) {
      return this.renderCollapseLeft(count);
    }
    return this.renderCollapsed(count);
  }

  renderAll(count) {
    return (
      <div className={layout.row}>
        {this.renderLeft()}
        {range(count).map((i) => {
          return this.renderPage(i);
        })}
        {this.renderRight(count)}
      </div>
    );
  }

  renderCollapseLeft(count) {
    return (
      <div className={layout.row}>
        {this.renderLeft()}
        {this.renderPage(0)}
        {this.renderEllipsis(count)}
        {this.renderPage(count - 5)}
        {this.renderPage(count - 4)}
        {this.renderPage(count - 3)}
        {this.renderPage(count - 2)}
        {this.renderPage(count - 1)}
        {this.renderRight(count)}
      </div>
    );
  }

  renderCollapseRight(count) {
    return (
      <div className={layout.row}>
        {this.renderLeft()}
        {this.renderPage(0)}
        {this.renderPage(1)}
        {this.renderPage(2)}
        {this.renderPage(3)}
        {this.renderPage(4)}
        {this.renderEllipsis(count)}
        {this.renderPage(count - 1)}
        {this.renderRight(count)}
      </div>
    );
  }

  renderCollapsed(count) {
    return (
      <div className={layout.row}>
        {this.renderLeft()}
        {this.renderPage(0)}
        {this.renderEllipsis(this.props.current - 2)}
        {this.renderPage(this.props.current - 1)}
        {this.renderPage(this.props.current)}
        {this.renderPage(this.props.current + 1)}
        {this.renderEllipsis(this.props.current + 2)}
        {this.renderPage(count - 1)}
        {this.renderRight(count)}
      </div>
    );
  }

  renderLeft() {
    return (
      <div className={cx(styleIcon, this.props.current === 0 ? styleDisabled : null)} onClick={this.onShowPrevious.bind(this)}>
        <FaIcon name={EFaIcon.AngleLeft} />
      </div>
    );
  }

  renderRight(count) {
    return (
      <div className={cx(styleIcon, this.props.current === count - 1 ? styleDisabled : null)} onClick={this.onShowNext.bind(this)}>
        <FaIcon name={EFaIcon.AngleRight} />
      </div>
    );
  }

  renderEllipsis(n) {
    return (
      <div className={cx(styleIcon)} onClick={() => this.props.onChange(n)}>
        <FaIcon name={EFaIcon.EllipsisH} />
      </div>
    );
  }

  renderPage(i) {
    return (
      <div key={i} className={cx(styleIcon, i === this.props.current ? styleSelected : null)} onClick={this.onChange.bind(this, i)}>
        {i + 1}
      </div>
    );
  }

  onChange(i) {
    this.props.onChange(i);
  }

  onShowPrevious() {
    if (this.props.current > 0) {
      this.props.onChange(this.props.current - 1);
    }
  }

  onShowNext() {
    let count = Math.ceil(this.props.total / this.props.size);
    if (this.props.current < count - 1) {
      this.props.onChange(this.props.current + 1);
    }
  }
}

const styleIcon = css`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${Theme.Dark};
  text-align: center;
  line-height: 45px;
  font-size: 24px;
  margin: 0 5px;
`;

const styleDisabled = css`
  opacity: 0.5;
`;

const styleSelected = css`
  background-color: ${Theme.Dark};
  color: white;
`;
