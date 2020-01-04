/**
 *Historyの管理オブジェクト
 *
 * @export
 * @class HistoryManager
 */
export default class HistoryManager {
  /**
   * historyを開始する
   * @param name history名
   * @return {void}
   */
  static start(name = 'action'): void {
    app.beginUndoGroup(name);
  }
  /**
   * historyを終了する
   * @return {void}
   */
  static end(): void {
    app.endUndoGroup();
  }
}
