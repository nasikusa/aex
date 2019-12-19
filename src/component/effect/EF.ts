import {Effects} from '../../data/Effects';

/**
 * エフェクト名の変換用のクラス。日本語エフェクト名から、matchNameの取得など。
 *
 * @export
 * @class EF
 */
export default class EF {

  /**
   *Effectsオブジェクトのキーからデータを取得する
   *
   * @static
   * @param {string} name エフェクト名（キー基準）
   * @returns
   * @memberof EF
   */
  static getDataByName(name: string){
    return Effects[name];
  }

  /**
   *
   *
   * @static
   * @param {string} name エフェクト名(type基準)
   * @param {string} type 取得したいタイプ (ja , en , q)
   * @returns
   * @memberof EF
   */
  static getDataHasName(name: string , type: string){
    for( let key of Object.keys(Effects) ){
      if( !Effects[key][type] ) continue;
      if( Effects[key][type] === name ){
        return Effects[key];
      }
    }
    return false;
  }

  /**
   *getDataByName関数の短縮版。オブジェクトを返す。
   *
   * @static
   * @param {string} name
   * @returns
   * @memberof EF
   */
  static has(name: string){
    return EF.getDataByName(name);
  }

  /**
   * getDataByName関数の短縮版。byはmatch(matchName)データを返す。
   *
   * @static
   * @param {string} name
   * @returns
   * @memberof EF
   */
  static by(name: string): string{
    return EF.getDataByName(name).match;
  }

  /**
   *英語キーワードからURLオブジェクトを取得する
   *
   * @static
   * @param {string} englishName　英語エフェクト名
   * @returns {boolean | EffectsContent}
   * @memberof EF
   */
  static hasEn(englishName: string){
    return EF.getDataHasName(englishName , "en");
  }

  /**
   *日本語キーワードからURLオブジェクトを取得する
   *
   * @static
   * @param {string} janeneseName 日本語エフェクト名
   * @returns {boolean | EffectsContent}
   * @memberof EF
   */
  static hasJa(janeneseName: string){
    return EF.getDataHasName(janeneseName , "ja");
  }

  /**
   *クイックキーワードからURLオブジェクトを取得する
   *
   * @static
   * @param {string} quickName
   * @returns　{boolean | EffectsContent}
   * @memberof EF
   */
  static hasQ(quickName: string){
    return EF.getDataHasName(quickName , "q");
  }

  /**
   *matchNameからURLオブジェクトを取得する
   *
   * @static
   * @param {string} matchName
   * @returns
   * @memberof EF
   */
  static hasM(matchName: string){
    return EF.getDataHasName(matchName , "match");
  }

  /**
   *英語キーワードからmatchNameを取得する
   *
   * @static
   * @param {string} englishName
   * @returns {string}
   * @memberof EF
   */
  static byEn(englishName: string): string | undefined{
    const URLObject = EF.hasEn(englishName);
    if( typeof URLObject === "object"){
      return URLObject.match;
    }
  }

  /**
   *日本語キーワードからmatchNameを取得する
   *
   * @static
   * @param {string} japaneseName
   * @returns {string}
   * @memberof EF
   */
  static byJa(japaneseName: string){
    const URLObject = EF.hasJa(japaneseName);
    if( typeof URLObject === "object"){
      return URLObject.match;
    }
  }

  /**
   *クイックキーワードからmatchNameを取得する
   *
   * @static
   * @param {string} englishName
   * @returns {string}
   * @memberof EF
   */
  static byQ(quickName: string){
    const URLObject = EF.hasQ(quickName);
    if( typeof URLObject === "object"){
      return URLObject.match;
    }
  }

}
