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

}
