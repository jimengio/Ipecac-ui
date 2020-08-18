import React from "react";
import { range } from "lodash-es";
import { css, cx } from "emotion";
import { DateTime } from "luxon";

import { Theme } from "./types";
import { expand, rowCenter, column, rowParted } from "@jimengio/flex-styles";

import FaIcon from "@jimengio/fa-icons";
import { EFaIcon } from "@jimengio/fa-icons";
import { lingual } from "./lingual";

interface IProps {
  date: DateTime;
  onSelect: (date: string) => void;
}

export default class Calendar extends React.Component<IProps, any> {
  render() {
    let date = this.getValidDate();

    let monthStartDay = date.startOf("month");
    let weekday = Number(monthStartDay.weekday);
    let start = 1 - weekday; // get start number, 1 for offset

    let startPosition = weekday - 1;
    let monthEndDay = date.endOf("month");
    let endPosition = monthEndDay.day + startPosition;

    // console.log("compare", startPosition, endPosition);

    if (startPosition <= 4 && endPosition <= 32) {
      start = start - 7;
    }

    let dayOffsets = range(start, start + 42); // 7x6 cells to display
    let days = dayOffsets.map((x) => {
      return monthStartDay.plus({ days: x });
    });

    return (
      <div className={cx(column, styleCalendar)}>
        <div className={cx(rowCenter, styleHeader)}>
          <FaIcon name={EFaIcon.AngleDoubleLeft} onClick={this.onPrevYear.bind(this)} />
          <FaIcon name={EFaIcon.AngleLeft} onClick={this.onPrevMonth.bind(this)} />
          <span className={styleYearMonth}>{date.toFormat("yyyy-MM")}</span>
          <FaIcon name={EFaIcon.AngleRight} onClick={this.onNextMonth.bind(this)} />
          <FaIcon name={EFaIcon.AngleDoubleRight} onClick={this.onNextYear.bind(this)} />
        </div>
        <div className={cx(expand, styleGrids)}>
          <span className={cx(styleCell, styleGuide)}>{lingual.monday}</span>
          <span className={cx(styleCell, styleGuide)}>{lingual.tuesday}</span>
          <span className={cx(styleCell, styleGuide)}>{lingual.wednesday}</span>
          <span className={cx(styleCell, styleGuide)}>{lingual.thursday}</span>
          <span className={cx(styleCell, styleGuide)}>{lingual.friday}</span>
          <span className={cx(styleCell, styleGuide)}>{lingual.sateday}</span>
          <span className={cx(styleCell, styleGuide)}>{lingual.sunday}</span>
          {days.map((day) => {
            let isSelected = day.hasSame(date, "day");
            // use start-of-day to make sure day-diff is correct
            let diffDay = day.startOf("day").diff(date.startOf("day"), "days").as("days");
            let isThisMonth = day.hasSame(date, "month");

            return (
              <span
                key={day.valueOf()}
                className={cx(styleCell, isThisMonth ? styleThisMonth : null, isSelected ? styleSelected : null)}
                onClick={this.onPickDay.bind(this, diffDay)}
              >
                {day.day}
              </span>
            );
          })}
        </div>
      </div>
    );
  }

  getValidDate() {
    return this.props.date.isValid ? this.props.date : DateTime.fromJSDate(new Date());
  }

  onSelect(date: DateTime) {
    this.props.onSelect(date.toISO());
  }

  onNextYear() {
    this.onSelect(this.getValidDate().plus({ years: 1 }));
  }

  onPrevYear() {
    this.onSelect(this.getValidDate().minus({ years: 1 }));
  }

  onNextMonth() {
    this.onSelect(this.getValidDate().plus({ months: 1 }));
  }

  onPrevMonth() {
    this.onSelect(this.getValidDate().minus({ months: 1 }));
  }
  onPickDay(diffDay: number) {
    this.onSelect(this.getValidDate().plus({ days: diffDay }));
  }
}

const styleCalendar = css`
  width: 370px;
  height: 440px;
  border: 1px solid ${Theme.Dark};
  border-radius: 5px;
`;

const styleHeader = css`
  height: 70px;
  border-bottom: 1px solid ${Theme.Dark};
  justify-content: space-around;
`;

const styleYearMonth = css`
  font-family: Roboto Mono, monospace;
`;

const styleCell = css`
  border-radius: 5px;
  font-size: 18px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Theme.FontGrayLight};
`;

const styleGrids = css`
  padding: 10px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const styleSelected = css`
  background-color: ${Theme.Dark};
  color: white;
`;

const styleThisMonth = css`
  color: ${Theme.Dark};
`;

const styleGuide = css`
  color: ${Theme.Dark};
`;
