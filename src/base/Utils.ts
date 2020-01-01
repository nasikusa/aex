/**
 *ExtendScript由来でない、通常のJS関連のユーティリティ関数をここに格納します。
 *
 * @export
 * @class Utils
 */
export default class Utils {
  /**
   * 型情報を取得する
   * @param obj
   */
  static getType(obj: any): string {
    const toString = Object.prototype.toString;
    return toString
      .call(obj)
      .slice(8, -1)
      .toLowerCase();
  }

  // static joinLine(inputArray: any[]) {}

  /**
   *配列の中からランダムに値を取得する
   *
   * @static
   * @param {any[]} array
   * @returns {*}
   * @memberof Utils
   */
  static getRandomFromArray(array: any[]): any {
    if (Array.isArray(array) && Utils.getType(array) === 'array') {
      return array[Math.floor(Math.random() * array.length)];
    }
    return false;
  }

  /**
   *最大最小値を決めた中でのランダム値を得る
   *
   * @static
   * @param {number} min
   * @param {number} max
   * @returns
   * @memberof Utils
   */
  static randomMinMax(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   *空白文字をトリムする
   *
   * @static
   * @param {string} inputString
   * @returns {string}
   * @memberof Utils
   */
  static trim(inputString: string): string {
    return inputString.replace(/^\s+|\s+$/g, '');
  }

  /**
   *配列から最小の値を得る
   *
   * @static
   * @param {number[]} inputArray
   * @returns {number}
   * @memberof Utils
   */
  static getMinFromArray(inputArray: number[]): number {
    return Math.min(...inputArray);
  }

  /**
   *配列から最大の値を得る
   *
   * @static
   * @param {number[]} inputArray
   * @returns {number}
   * @memberof Utils
   */
  static getMaxFromArray(inputArray: number[]): number {
    return Math.max(...inputArray);
  }

  /**
   *配列を空にする
   *
   * @static
   * @param {any[]} array
   * @returns {any[]}
   * @memberof Utils
   */
  static array2Empty(array: any[]): any[] {
    array.length = 0;
    return array;
  }

  // https://ics.media/entry/11292/
  /**
   *加算ランダム値を得る
   *
   * @static
   * @returns {number}
   * @memberof Utils
   */
  static getAddRandom(): number {
    return (Math.random() + Math.random()) / 2;
  }

  /**
   *乗算のランダム値を得る
   *
   * @static
   * @returns {number}
   * @memberof Utils
   */
  static getMultiplyRandom(): number {
    return Math.random() * Math.random();
  }

  /**
   *
   *
   * @static
   * @returns {number}
   * @memberof Utils
   */
  static getSqrtRandom(): number {
    return Math.sqrt(Math.random());
  }

  /**
   *正規分布のランダム値を得る
   *
   * @static
   * @returns {number}
   * @memberof Utils
   */
  static getNormalRandom(): number {
    // 0.0未満、1.0以上になるケースがあるため
    // その時は再計算を行う
    let value;
    while (true) {
      value = Utils.calcNormal();
      if (0 <= value && value < 1) {
        break;
      }
    }
    return value;
  }

  /**
   *正規分布用の計算を行う
   *
   * @static
   * @returns {number}
   * @memberof Utils
   */
  static calcNormal(): number {
    // 正規乱数
    const r1 = Math.random();
    const r2 = Math.random();
    let value = Math.sqrt(-2.0 * Math.log(r1)) * Math.sin(2.0 * Math.PI * r2);
    // 値を0以上1未満になるよう正規化する
    value = (value + 3) / 6;
    return value;
  }

  /**
   *文字を改行ごとに区切って文字配列を作成する
   *
   * @static
   * @param {string} inputText
   * @returns {string[]}
   * @memberof Utils
   */
  static getArrayDividedByLine(inputText: string): string[] {
    return inputText.split(/\n/);
  }
}
