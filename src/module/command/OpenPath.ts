import CallCommand from './CallCommand';
import { Folders } from '../../data/Folders';
import { AppPath } from '../../data/Paths';
import _ from '../../base/_';

/**
 *フォルダやアプリなどのパス指定でのオープンを担当するクラス
 *
 * @export
 * @class OpenPath
 * @todo appを開く関数の修正 , urlの正規表現でのチェック
 */
export default class OpenPath {
  /**
   *開くパスの配列
   *
   * @type {string[]}
   * @memberof OpenPath
   */
  public paths: string[] = [];

  /**
   *パスが引数に入っていた場合は、初期化する
   * @param {(string | string[])} [path] パスもしくはパス配列
   * @memberof OpenPath
   */
  constructor(path?: string | string[]) {
    this.init(path);
  }

  /**
   *初期化関数
   *
   * @param {(string | string[])} パスもしくはパス配列
   * @memberof OpenPath
   */
  init(path?: string | string[]): void {
    if (path != null) {
      if (typeof path === 'string') {
        this.setPath(path);
      } else if (typeof path === 'object' && _.getType(path) === 'array') {
        this.setPaths(path);
      }
    }
  }

  /**
   *開くパスをセットする
   *
   * @param {string} pathName パス名
   * @returns {OpenPath} thisを返却する
   * @memberof OpenPath
   */
  setPath(pathName: string): OpenPath {
    this.paths.push(pathName);
    return this;
  }

  /**
   *開くパスを複数セットする
   *
   * @param {string[]} pathNameArray パス配列
   * @returns {OpenPath} thisを返却する
   * @memberof OpenPath
   * @deprecated setPath関数に対して、可長変引数で設定できた方が便利だと思う。配列からの入力も、 ...array みたいな感じで対応できるし。
   */
  setPaths(pathNameArray: string[]): OpenPath {
    for (const pathName of pathNameArray) {
      this.paths.push(pathName);
    }
    return this;
  }

  /**
   *フォルダパスをフォルダオブジェクトの名前キーから取得して、設定する
   *
   * @param {string} folderName フォルダオブジェクト内のフォルダ名を指定
   * @returns {boolean} 失敗の際はfalse , 成功の際はtrueを返す
   * @memberof OpenFolder
   */
  setFolderByName(folderName: string): boolean {
    if (Folders[folderName] != null) {
      this.paths.push(Folders[folderName].path);
      return true;
    }
    return false;
  }

  // TODO: なぜかAE側が固まって動かなくなってしまう（アプリを立ち上げると固まる）
  // setAppByName(appName: string): boolean {
  //   if (AppPath[appName] != null) {
  //     this.paths.push(` "${AppPath[appName].path}"`);
  //     return true;
  //   }
  //   return false;
  // }

  /**
   *すべてのセットされたパスを削除する
   *
   * @memberof OpenPath
   */
  removeAllPath(): void {
    this.paths = [];
  }

  /**
   * パスを開くコマンドを実行する
   *
   * @returns {boolean} 成否
   * @memberof OpenFolder
   * @todo mac対応
   */
  open(): boolean {
    const commandArray: string[] = [];

    if (_.isWindows()) {
      for (const path of this.paths) {
        commandArray.push(`start "" "${path}"`);
      }
    } else if (_.isMac()) {
      for (const path of this.paths) {
        // alert(`open "${path}"`);
        commandArray.push(`open "${path}"`);
      }
    } else {
      return false;
    }

    const callCommand: CallCommand = new CallCommand(commandArray);

    if (callCommand.exec(true, true)) {
      return true;
    }
    return false;
  }
}
