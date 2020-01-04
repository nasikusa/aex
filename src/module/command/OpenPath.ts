import CallCommand from './CallCommand';
import { Folders } from '../../data/Folders';
import { AppPath } from '../../data/Paths';
import _ from '../../base/_';

export default class OpenPath {
  /**
   *開くパスの配列
   *
   * @type {string[]}
   * @memberof OpenPath
   */
  public paths: string[] = [];

  constructor(path?: string | string[]) {
    this.init(path);
  }

  /**
   *初期化関数
   *
   * @param {(string | string[])}
   * @memberof OpenPath
   */
  init(path?: string | string[]) {
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
   * @param {string} pathName
   * @returns {OpenPath}
   * @memberof OpenPath
   */
  setPath(pathName: string): OpenPath {
    this.paths.push(pathName);
    return this;
  }

  /**
   *開くパスを複数セットする
   *
   * @param {string[]} pathNameArray
   * @returns {OpenPath}
   * @memberof OpenPath
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
   * @param {string} folderName
   * @returns {(boolean | string)} 失敗の際はfalse , 成功の際はパスを返す
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
  setAppByName(appName: string): boolean {
    if (AppPath[appName] != null) {
      this.paths.push(` "${AppPath[appName].path}"`);
      return true;
    }
    return false;
  }

  /**
   *すべてのセットされたパスを削除する
   *
   * @memberof OpenPath
   */
  removeAllPath() {
    this.paths = [];
  }

  /**
   * パスを開くコマンドを実行する
   *
   * @returns {boolean}
   * @memberof OpenFolder
   */
  open(): boolean {
    let commandArray: string[] = [];

    for (let path of this.paths) {
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
