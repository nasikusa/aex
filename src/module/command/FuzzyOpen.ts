import _ from '../../base/_';
import CallCommand from './CallCommand';
import CommandUtils from './CommandUtils';
import OpenPath from './OpenPath';

type getDirType = 'F' | 'D' | 'FD';

/**
 *あいまい検索を活用したクラス
 *
 * @export
 * @class FuzzyOpen
 * @todo 自動ファイルかディレクトリ読み込み
 */
export default class FuzzyOpen {
  /**
   *対象となるパス
   *
   * @type {string}
   * @memberof FuzzyOpen
   */
  protected targetPath: string;

  /**
   *対象となるパスの検索対象
   *
   * @type {getDirType}
   * @memberof FuzzyOpen
   */
  protected searchType: getDirType;

  /**
   *検索したディレクトリやファイル情報の結果をここの配列に入れる
   *
   * @type {string[]}
   * @memberof FuzzyOpen
   */
  protected searchArray: string[] = [];

  protected searchMinScore: number = 0.33;

  /**
   *fuzzyset.js
   *
   * @type {*}
   * @memberof FuzzyOpen
   * @todo importしたい
   */
  public fzy: any = require('fuzzyset.js');

  /**
   *Creates an instance of FuzzyOpen.
   * @param {string} [path] ターゲットとなるパス
   * @param {getDirType} [type] 対象となるものがディレクトリかファイルか、両方か
   * @param {boolean} [isSearchRecursive=false]　再帰的に検索するかどうか
   * @param {boolean} [isReturnFullPath=false]　フルパスで検索結果を返すかどうか
   * @memberof FuzzyOpen
   */
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

  /**
   *あいまい検索で検索する関数
   *
   * @param {string} searchTxt　検索するワード
   * @param {number} [minScore=this.searchMinScore] 最低の一致点数
   * @returns {(boolean | [string, string, number][])}　失敗した場合はfalse , 成功したら配列を返す
   * @memberof FuzzyOpen
   */
  search(searchTxt: string, minScore: number = this.searchMinScore): boolean | [string, string, number][] {
    /**
     * fuzzyset.jsを初期化したもの
     * @todo anyになっている , typeの追加
     */
    const fuzzyset = this.fzy(this.searchArray);

    /**
     * fuzzyset.jsでの検索結果
     * @type {null | [number,string][]}
     */
    const searchResult: null | [number, string][] = fuzzyset.get(searchTxt, null, minScore);

    /**
     * 最終的な検索結果をここに格納するための配列
     * @type {[string, string, number][]}
     */
    let returnResult: [string, string, number][] = [];

    if (searchResult != null) {
      for (const value of searchResult) {
        /**
         * 対象のフルパス
         * @todo / の重複の可能性
         */
        const fullPath: string = `${this.targetPath}/${value[1]}`;

        /**
         * fuzzyset.jsの返り値の順番だと、少し使いにくかったので順番を変更　＋　フルパス追加の配列
         */
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

  /**
   *一番一致度の高いもののみを返すsearch関数
   *
   * @param {string} searchTxt
   * @param {number} [minScore=this.searchMinScore]
   * @returns {(boolean | [string, string, number])}
   * @memberof FuzzyOpen
   */
      return false;
    }else{
      return result[0];
    }
  }


}
