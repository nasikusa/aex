import _ from '../base/_';

export default class Debug {
  /**
   *typeofで返される値を表示させる
   *
   * @static
   * @param {*} input
   * @memberof Debug
   */
  static typeof(input: any): void {
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
  static objectKeys(obj: unknown, maxNum = -1): void {
    let count = 0;
    let resultText = '';
    if (typeof obj === 'object' && _.getType(obj) !== 'array' && obj != null) {
      for (const key of Object.keys(obj)) {
        resultText += `${key}`;

        // const type: string = _.getType(obj[key]);

        resultText += `\n`;
        count += 1;
        if (count > maxNum && maxNum !== -1) {
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
  static alertWithTitle(title: string, input: any): void {
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
  static at(title: string, input: any): void {
    Debug.alertWithTitle(title, input);
  }

  /**
   *スクリプト読み込み画面を開く
   *
   * @static
   * @memberof Debug
   */
  static openScript(): void {
    app.executeCommand(8000);
  }

  /**
   *スクリプトエディターを開く
   *
   * @static
   * @memberof Debug
   */
  static openScriptEditor(): void {
    app.executeCommand(8001);
  }
}
