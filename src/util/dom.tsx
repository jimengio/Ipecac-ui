/** 探测点击事件是否有扫描枪触发. 扫描枪会发送字符串到聚焦的未必 */
export function triggeredByScanner(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  return event.nativeEvent.detail === 0;
}
