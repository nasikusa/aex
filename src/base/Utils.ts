export default class Utils {

  /**
   * 型情報を取得する
   * @param obj 
   */
  static getType(obj: any){
    const toString = Object.prototype.toString;
    return toString.call(obj).slice(8, -1).toLowerCase();
  }
}