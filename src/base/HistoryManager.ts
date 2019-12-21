/**
 *Historyの管理オブジェクト
 *
 * @export
 * @class HistoryManager
 */
export default class HistoryManager{
  constructor(){

  }

  /**
   * historyを開始する
   * @param name history名
   */
  static start(name: string = "action"){
    app.beginUndoGroup(name);
  }
  /**
   * historyを終了する
   */
  static end(){
    app.endUndoGroup();
  }

  static try(){

  }

}
