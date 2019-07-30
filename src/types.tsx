export enum Theme {
  BgGray = "#999",
  BgGrayLight = "#ebf9ff",
  BgFooter = "#f8f8f8",
  BgDisabled = "#bbbbbb",

  Divider = "#bbb",

  FontGray = "#677f89",
  FontGrayLight = "#bbb",

  Dark = "#324A59",
  Orange = "#ff9800",
  Red = "#e51c23",
  Green = "#259b24",

  GreyDark = "#677F89",
}

export type FuncVoid = () => void;

export enum EStatusColors {
  //通用状态
  Finished = "#52C41A",
  Processing = "#238FF3",
  Deleted = "#F04864",
  Canceled = "#BDBDBD",
  Success = "#52C41A",
  Error = "#F04864",

  //审核状态
  Passed = "#52C41A",
  Waiting = "#FFC161",
  Rejected = "#F04864",

  //版本状态
  Draft = "#FDBA63",
  Published = "#52C41A",
  Current = "#238FF3",
}

export interface ISimpleObject {
  [k: string]: any;
}
