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
  static getType(obj: any){
    const toString = Object.prototype.toString;
    return toString.call(obj).slice(8, -1).toLowerCase();
  }

  static joinLine(inputArray: any[]){

  }

  static getRandomFromArray(array: any): any{
    if( Array.isArray(array) && Utils.getType(array) === 'array' ){
      return array[Math.floor(Math.random() * array.length)];
    }
    return false;
  }

  static randomMinMax(min: number , max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static trim(inputString: string): string{
    return inputString.replace(/^\s+|\s+$/g, "");
  }

  static getMinFromArray(inputArray: number[]): number{
    return Math.min.apply(Math, inputArray)
  }

  static getMaxFromArray(inputArray: number[]): number{
    return Math.max.apply(Math, inputArray);
  }

  static array2Empty(array: any): any{
    if( Array.isArray(array) && Utils.getType(array) === 'array' ){
      array.length = 0;
      return array;
    }
    return false;
  }

  // https://ics.media/entry/11292/
  static getAddRandom(): number{
    return (Math.random() + Math.random()) / 2;
  }

  static getMultiplyRandom(): number {
    return Math.random() * Math.random()
  }

  static getSqrtRandom(): number {
    return Math.sqrt(Math.random());
  }

  static getNormalRandom(): number{
    // 0.0未満、1.0以上になるケースがあるため
    // その時は再計算を行う
    var value;
    while (true) {
      value = Utils.calcNormal();
      if (0 <= value && value < 1) {
        break;
      }
    }
    return value;
  }

  static calcNormal(): number {
    // 正規乱数
    var r1 = Math.random();
    var r2 = Math.random();
    var value =
      Math.sqrt(-2.0 * Math.log(r1)) *
      Math.sin(2.0 * Math.PI * r2);
    // 値を0以上1未満になるよう正規化する
    value = (value + 3) / 6;
    return value;
  }

  static getArrayDividedByLine(inputText: string): string[]{
    return inputText.split(/\n/);
  }

}
