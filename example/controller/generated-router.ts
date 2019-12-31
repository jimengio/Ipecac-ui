import queryString from "query-string";

type Id = string;

function switchPath(x: string) {
  location.hash = `#${x}`;
}

function qsStringify(queries: { [k: string]: string }) {
  return queryString.stringify(queries);
}

// generated

export let genRouter = {
  home: {
    name: "home",
    raw: "home",
    path: () => `/home`,
    go: () => switchPath(`/home`),
  },
  buttons: {
    name: "buttons",
    raw: "buttons",
    path: () => `/buttons`,
    go: () => switchPath(`/buttons`),
  },
  popup: {
    name: "popup",
    raw: "popup",
    path: () => `/popup`,
    go: () => switchPath(`/popup`),
  },
  progress: {
    name: "progress",
    raw: "progress",
    path: () => `/progress`,
    go: () => switchPath(`/progress`),
  },
  propertyList: {
    name: "property-list",
    raw: "property-list",
    path: () => `/property-list`,
    go: () => switchPath(`/property-list`),
  },
  roughTable: {
    name: "rough-table",
    raw: "rough-table",
    path: () => `/rough-table`,
    go: () => switchPath(`/rough-table`),
  },
  tag: {
    name: "tag",
    raw: "tag",
    path: () => `/tag`,
    go: () => switchPath(`/tag`),
  },
  calendar: {
    name: "calendar",
    raw: "calendar",
    path: () => `/calendar`,
    go: () => switchPath(`/calendar`),
  },
  dialog: {
    name: "dialog",
    raw: "dialog",
    path: () => `/dialog`,
    go: () => switchPath(`/dialog`),
  },
  durationTime: {
    name: "duration-time",
    raw: "duration-time",
    path: () => `/duration-time`,
    go: () => switchPath(`/duration-time`),
  },
  numberPad: {
    name: "number-pad",
    raw: "number-pad",
    path: () => `/number-pad`,
    go: () => switchPath(`/number-pad`),
  },
  informationRows: {
    name: "information-rows",
    raw: "information-rows",
    path: () => `/information-rows`,
    go: () => switchPath(`/information-rows`),
  },
  formLayout: {
    name: "form-layout",
    raw: "form-layout",
    path: () => `/form-layout`,
    go: () => switchPath(`/form-layout`),
  },
  formTableLayout: {
    name: "form-table-layout",
    raw: "form-table-layout",
    path: () => `/form-table-layout`,
    go: () => switchPath(`/form-table-layout`),
  },
  tabs: {
    name: "tabs",
    raw: "tabs",
    path: () => `/tabs`,
    go: () => switchPath(`/tabs`),
  },
  checkbox: {
    name: "checkbox",
    raw: "checkbox",
    path: () => `/checkbox`,
    go: () => switchPath(`/checkbox`),
  },
  checkResult: {
    name: "check-result",
    raw: "check-result",
    path: () => `/check-result`,
    go: () => switchPath(`/check-result`),
  },
  digitsPicker: {
    name: "digits-picker",
    raw: "digits-picker",
    path: () => `/digits-picker`,
    go: () => switchPath(`/digits-picker`),
  },
  emptyPlaceholder: {
    name: "empty-placeholder",
    raw: "empty-placeholder",
    path: () => `/empty-placeholder`,
    go: () => switchPath(`/empty-placeholder`),
  },
  eventTip: {
    name: "event-tip",
    raw: "event-tip",
    path: () => `/event-tip`,
    go: () => switchPath(`/event-tip`),
  },
  messageBanner: {
    name: "message-banner",
    raw: "message-banner",
    path: () => `/message-banner`,
    go: () => switchPath(`/message-banner`),
  },
  pagination: {
    name: "pagination",
    raw: "pagination",
    path: () => `/pagination`,
    go: () => switchPath(`/pagination`),
  },
  relativeTime: {
    name: "relative-time",
    raw: "relative-time",
    path: () => `/relative-time`,
    go: () => switchPath(`/relative-time`),
  },
  shortenCode: {
    name: "shorten-code",
    raw: "shorten-code",
    path: () => `/shorten-code`,
    go: () => switchPath(`/shorten-code`),
  },
  $: {
    name: "home",
    raw: "",
    path: () => `/`,
    go: () => switchPath(`/`),
  },
};
