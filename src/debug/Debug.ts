import _ from "../base/_";

export default class Debug {

  /**
   *typeofで返される値を表示させる
   *
   * @static
   * @param {*} input
   * @memberof Debug
   */
  static typeof(input: any){
    alert(typeof input);
  }

  /**
   *オブジェクトのキーをアラートで表示させる
   *
   * @static
   * @param {unknown} obj
   * @param {number} [maxNum=-1]
   * @memberof Debug
   */
  static objectKeys(obj: unknown, maxNum: number = -1): void{
    let count:number = 0;
    let resultText: string = "";
    if( typeof obj === 'object' && _.getType(obj) !== 'array' && obj != null ){
      for( let key of Object.keys(obj) ){
        resultText += `${key}\n`;
        count += 1;
        if(count > maxNum && maxNum !== -1){
          break;
        }
      }
      alert(resultText);
    }
  }

  /**
   *タイトルと値でわかりやすくアラートさせる
   *
   * @static
   * @param {string} title
   * @param {*} input
   * @memberof Debug
   */
  static alertWithTitle(title: string , input: any){
    alert(`${title} : ${input}`);
  }

  /**
   *alertWithTitleのエイリアス
   *
   * @static
   * @param {string} title
   * @param {*} input
   * @memberof Debug
   */
  static at(title: string, input: any){
    Debug.alertWithTitle(title,input);
  }

  /**
   *スクリプト読み込み画面を開く
   *
   * @static
   * @memberof Debug
   */
  static openScript(){
    app.executeCommand(8000);
  }

  /**
   *スクリプトエディターを開く
   *
   * @static
   * @memberof Debug
   */
  static openScriptEditor(){
    app.executeCommand(8001);
  }

};
