import _ from '../../base/_';
import CallCommand from './CallCommand';
import CommandUtils from './CommandUtils';
import OpenPath from './OpenPath';

type getDirType = 'F' | 'D' | 'FD';

export default class FuzzyOpen {
  /**
   *対象となるパス
   *
   * @type {string}
   * @memberof FuzzyOpen
   */
  public targetPath: string;

  /**
   *対象となるパスの検索対象
   *
   * @type {getDirType}
   * @memberof FuzzyOpen
   */
  public searchType: getDirType;

  /**
   *検索したディレクトリやファイル情報の結果をここの配列に入れる
   *
   * @type {string[]}
   * @memberof FuzzyOpen
   */
  public searchArray: string[] = [];

  /**
   *fuzzy.js
   *
   * @type {*}
   * @memberof FuzzyOpen
   */
  public fzy: any = require('fuzzyset.js');

  constructor(path?: string, type?: getDirType, isSearchRecursive: boolean = false, isReturnFullPath: boolean = false) {
    if (path != null) {
      this.setTargetPath(path);
    }
    if (type != null) {
      this.setType(type);
    }
    if (this.targetPath != null && this.searchType != null) {
      this.setSearchArray(isSearchRecursive, isReturnFullPath);
    }
  }

  /**
   *検索する対象のパスをセットする
   *
   * @param {string} path
   * @memberof FuzzyOpen
   */
  setTargetPath(path: string): void {
    this.targetPath = path;
  }

  /**
   *検索する対象の種類を選択する
   *
   * @param {getDirType} type
   * @memberof FuzzyOpen
   */
  setType(type: getDirType) {
    this.searchType = type;
  }

  /**
   *検索用の配列データをセットする
   *
   * @param {boolean} [isSearchRecursive=false]
   * @param {boolean} [isReturnFullPath=false]
   * @returns {boolean}
   * @memberof FuzzyOpen
   */
  setSearchArray(isSearchRecursive: boolean = false, isReturnFullPath: boolean = false): boolean {
    if (this.targetPath == null || this.searchType == null) return false;

    const result: string | string[] = CommandUtils.getDir(this.targetPath, this.searchType, {
      isNameOnly: isReturnFullPath,
      isReturnAsArray: true,
      isSearchSub: isSearchRecursive,
    });
    if (typeof result === 'object' && _.getType(result) === 'array') {
      this.searchArray = result;
      return true;
    }
    return false;
  }

  search(searchTxt: string, minScore: number = 0.33): boolean | [string, string, number][] {
    const fuzzyset = this.fzy(this.searchArray);
    const searchResult: null | [number, string][] = fuzzyset.get(searchTxt, null, minScore);
    let returnResult: [string, string, number][] = [];
    if (searchResult != null) {
      for (const value of searchResult) {
        const fullPath: string = `${this.targetPath}/${value[1]}`;
        const returnResultContent: [string, string, number] = [value[1], fullPath, value[0]];
        returnResult.push(returnResultContent);
      }
      return returnResult;
    }

    return false;

    // const result = this.fzy.filter(searchTxt, this.searchArray);
    // const matches = result.map(function(el) {
    //   return el.string;
    // });
    // return matches;
    // const openPath = new OpenPath();
    // openPath.setPath(`${this.targetPath}/${String(matches)}`);
    // openPath.open();
  }

  searchOne(searchTxt: string, minScore: number = 0.33):boolean | [string, string, number] {
    const result = this.search(searchTxt,minScore);
    if(typeof result === 'boolean'){
      return false;
    }else{
      return result[0];
    }
  }


}
