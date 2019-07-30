import React, { useState, FC } from "react";
import { parseRoutePath, IRouteParseResult } from "@jimengio/ruled-router";
import { css, cx } from "emotion";
import { findRouteTarget } from "@jimengio/ruled-router/lib/dom";

import Home from "./home";
import { genRouter } from "controller/generated-router";
import { DocSidebar, ISidebarEntry } from "@jimengio/doc-frame";
import { row, fullscreen, expand } from "@jimengio/shared-utils";
import DemoButton from "../demo/button";
import DemoPopupArea from "../demo/popup-area";
import DemoDurationCompact from "../demo/duration-compact";
import DemoNumberPad from "../demo/number-pad";
import DemoInformationRows from "../demo/information-rows";
import DemoFormLayout from "../demo/form-layout";
import DemoFormTableLayout from "../demo/form-table-layout";
import DemoTabs from "../demo/tabs";
import DemoCheckbox from "../demo/checkbox";
import DemoCalendar from "demo/calendar";
import DemoCheckResult from "demo/check-result";
import DemoDialog from "demo/dialog";
import DemoDigitsPicker from "demo/digits-picker";
import DemoEmptyPlaceholder from "demo/empty-placeholder";
import DemoEventTip from "demo/event-tip";
import DemoMessageBanner from "demo/message-banner";
import DemoPagination from "demo/pagination";
import DemoProgress from "demo/progress";
import DemoRelativeTime from "demo/relative-time";
import DemoRoughTable from "demo/rough-table";
import DemoShortenCode from "demo/shorten-code";
import DemoTag from "demo/tag";

let items: ISidebarEntry[] = [
  {
    title: "Buttons",
    cnTitle: "按钮",
    path: genRouter.buttons.name,
  },
  {
    title: "Popup",
    cnTitle: "弹出层",
    path: genRouter.popup.name,
  },
  { title: "Duration compact", path: genRouter.durationTime.name },
  { title: "Calendar", path: genRouter.calendar.name },
  { title: "Number pad", path: genRouter.numberPad.name },
  { title: "Information rows", path: genRouter.informationRows.name },
  { title: "Form layout", path: genRouter.formLayout.name },
  { title: "Form table layout", path: genRouter.formTableLayout.name },
  { title: "Tabs", path: genRouter.tabs.name },
  { title: "Checkbox", path: genRouter.checkbox.name },
  { title: "Check result", path: genRouter.checkResult.name },
  { title: "Dialog", path: genRouter.dialog.name },
  { title: "Digits picker", path: genRouter.digitsPicker.name },
  { title: "Empty placeholder", path: genRouter.emptyPlaceholder.name },
  { title: "Event tip", path: genRouter.eventTip.name },
  { title: "Message banner", path: genRouter.messageBanner.name },
  { title: "Pagination", path: genRouter.pagination.name },
  { title: "Relative time", path: genRouter.relativeTime.name },
  { title: "Rough table", path: genRouter.roughTable.name },
  { title: "Shorten code", path: genRouter.shortenCode.name },
  { title: "Tag", path: genRouter.tag.name },
];

let Container: FC<{
  router: IRouteParseResult;
}> = (props) => {
  /** Methods */

  let switchPage = (page: string) => {
    let target = findRouteTarget(genRouter, page);

    if (target != null) {
      target.go();
    } else {
      console.error("Unknown page", page, genRouter);
    }
  };

  /** Renderers */

  let renderChildPage = (routerTree: IRouteParseResult) => {
    if (routerTree != null) {
      switch (routerTree.name) {
        case genRouter.home.name:
          return <Home />;
        case genRouter.buttons.name:
          return <DemoButton />;
        case genRouter.popup.name:
          return <DemoPopupArea />;
        case genRouter.durationTime.name:
          return <DemoDurationCompact />;
        case genRouter.numberPad.name:
          return <DemoNumberPad />;
        case genRouter.informationRows.name:
          return <DemoInformationRows />;
        case genRouter.formLayout.name:
          return <DemoFormLayout />;
        case genRouter.formTableLayout.name:
          return <DemoFormTableLayout />;
        case genRouter.tabs.name:
          return <DemoTabs />;
        case genRouter.checkbox.name:
          return <DemoCheckbox />;
        case genRouter.calendar.name:
          return <DemoCalendar />;
        case genRouter.checkResult.name:
          return <DemoCheckResult />;
        case genRouter.dialog.name:
          return <DemoDialog />;
        case genRouter.digitsPicker.name:
          return <DemoDigitsPicker />;
        case genRouter.emptyPlaceholder.name:
          return <DemoEmptyPlaceholder />;
        case genRouter.eventTip.name:
          return <DemoEventTip />;
        case genRouter.messageBanner.name:
          return <DemoMessageBanner />;
        case genRouter.pagination.name:
          return <DemoPagination />;
        case genRouter.progress.name:
          return <DemoProgress />;
        case genRouter.relativeTime.name:
          return <DemoRelativeTime />;
        case genRouter.roughTable.name:
          return <DemoRoughTable />;
        case genRouter.shortenCode.name:
          return <DemoShortenCode />;
        case genRouter.tag.name:
          return <DemoTag />;

        default:
          return `Page ${props.router.name}`;
      }
    }
    return <div>NOTHING</div>;
  };

  return (
    <div className={cx(row, fullscreen, styleContainer)}>
      <DocSidebar
        currentPath={props.router.name}
        onSwitch={(item) => {
          switchPage(item.path);
        }}
        items={items}
      />
      <div className={expand}>{renderChildPage(props.router)}</div>
    </div>
  );
};

export default Container;

const styleContainer = css`
  font-family: "Helvetica";
`;
