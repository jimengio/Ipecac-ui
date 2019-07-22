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
  relativeTime: {
    name: "relative-time",
    raw: "relative-time",
    path: () => `/relative-time`,
    go: () => switchPath(`/relative-time`),
  },
  _: {
    name: "home",
    raw: "",
    path: () => `/`,
    go: () => switchPath(`/`),
  },
};
