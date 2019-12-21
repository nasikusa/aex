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
}

  /**
   *ItemCollectionをArrayに変換する関数
   *
   * @static
   * @param {ItemCollection} inputCollection
   * @returns {Item[]}
   * @memberof Utils
   */
  static Collection2Array(inputCollection: ItemCollection): Item[]{
    const resultArray: Item[] = [];
    for( let i = 0 ; i < inputCollection.length ; i++ ){
      const item = inputCollection[i+1];
      if( item != null ){
        resultArray[i] = item;
      }
    }
    return resultArray;
  }

}
