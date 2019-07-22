import React, { useState, FC } from "react";
import { parseRoutePath, IRouteParseResult } from "@jimengio/ruled-router";
import { css, cx } from "emotion";

import Home from "./home";
import { HashRedirect } from "@jimengio/ruled-router/lib/dom";
import { genRouter } from "controller/generated-router";
import { DocSidebar, ISidebarEntry } from "@jimengio/doc-frame";
import { row, fullscreen, expand } from "@jimengio/shared-utils";
import DemoButtons from "./demo/buttons";

let items: ISidebarEntry[] = [
  {
    title: "Buttons",
    cnTitle: "按钮",
    path: genRouter.buttons.name,
  },
  {
    title: "Popup",
    cnTitle: "按钮",
    path: genRouter.popup.name,
  },
];

let Container: FC<{
  router: IRouteParseResult;
}> = (props) => {
  /** Methods */

  let switchPage = (page: string) => {
    switch (page) {
      case "buttons":
        genRouter.buttons.go();
        break;
      case "popup":
        genRouter.popup.go();
        break;
      case "relative-time":
        genRouter.relativeTime.go();
        break;
      default:
        console.error("Unknown page", page);
    }
  };

  /** Renderers */

  let renderChildPage = (routerTree: IRouteParseResult) => {
    if (routerTree != null) {
      switch (routerTree.name) {
        case genRouter.home.name:
          return <Home />;
        case genRouter.buttons.name:
          return <DemoButtons />;
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

const styleTitle = css`
  margin-bottom: 16px;
`;
