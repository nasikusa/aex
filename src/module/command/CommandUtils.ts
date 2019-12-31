import _ from '../../base/_';
import CallCommand from './CallCommand';

/**
 *getDir関数で使用しているオプションたちのインターフェース
 *
 * @interface getDirOptionObject
 */
interface getDirOptionObject {
  isSearchSub?: boolean;
  isNameOnly?: boolean;
  sortOption?: '/O:d' | '/O:e' | '/O:g' | '/O:n' | '/O:s' | '/O-d' | '/O-e' | '/O-g' | '/O-n' | '/O-s' | '';
  isReverseArray?: boolean;
  isReturnAsArray?: boolean;
}

export default class CommandUtils {


  constructor() {}

  /**
   *指定したパスのファイルやディレクトリを取得する
   *
   * @param {string} targetPath
   * @param {('F' | 'D' | 'FD')} type
   * @param {getDirOptionObject} [optionObject={
   *       isSearchSub: false,
   *       isNameOnly: false,
   *       sortOption: '',
   *       isReverseArray: false,
   *       isReturnAsArray: true,
   *     }]
   * @returns {(string | string[])}
   * @memberof CommandUtils
   * @read https://proengineer.internous.co.jp/content/columnfeature/5043
   * @read https://qiita.com/forty4_jp/items/f8b76b67e6d11f3deeb3
   * @read https://hacknote.jp/archives/21461/
   * @todo macで動かないオプションの修正 , macでディレクトリ取得の際に / が末尾につくので削除したい
   */
  static getDir(
    targetPath: string,
    type: 'F' | 'D' | 'FD',
    optionObject: getDirOptionObject = {
      isSearchSub: false,
      isNameOnly: false,
      sortOption: '',
      isReverseArray: false,
      isReturnAsArray: true,
    }
  ): string | string[] {
    const callCommand = new CallCommand();
    let command = '';

    if (_.isWindows()) {
      command += `dir "${targetPath}" /b`;
      switch (type) {
        case 'F':
          command += ' /A-d ';
          break;
        case 'D':
          command += ' /A:d ';
          break;
        case 'FD':
          command += '';
          break;
      }
      if (optionObject.isSearchSub) command += '/S ';
      if (optionObject.isNameOnly) command += '/D ';
      if (optionObject.sortOption != null) command += optionObject.sortOption;
    } else if (_.isMac()) {
      command += `ls `;
      switch (type) {
        case 'F':
          command += ` -F ${targetPath} | grep -v / `;
          break;
        case 'D':
          command += ` -F ${targetPath} | grep / `;
          break;
        case 'FD':
          command += '';
          break;
      }

      // TODO: lsコマンドで再帰的に検索する方法を調べたい
      // if (optionObject.isSearchSub) command += '/S ';
      // TODO: 現在ソートオプションは他で使っていないけども、余裕があれば作りたい
      // if (optionObject.sortOption != null) command += optionObject.sortOption;
    } else {
      return '';
    }

    callCommand.setCommand(command);

    /**
     * コマンドの返り値
     */
    const result: string | boolean = callCommand.exec(true);
    if (typeof result !== 'boolean') {
      if (optionObject.isReturnAsArray) {
        /**
         * コマンドラインから得た、改行付きのリストを配列に変換したもの
         */
        const resultArray = _.getArrayDividedByLine(result);

        if (_.isMac() && optionObject.isNameOnly === false) {
          resultArray.forEach((value, index) => {
            resultArray[index] = `${targetPath}/${value}`;
          });
        }

        if (optionObject.isReverseArray) {
          return resultArray.reverse();
        } else {
          return resultArray;
        }
      } else {
        return result;
      }
    }
    return '';
  }
}
