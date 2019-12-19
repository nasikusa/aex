import CallCommand from '../../base/CallCommand';
import {Folders} from '../../data/Folders';
import _ from '../../base/_';

export default class OpenPath {

  public paths: string[] = [];

  constructor(path: string | string[] | null = null){

    this.init(path);

  }

  /**
   *初期化関数
   *
   * @param {(string | string[] | null)} [path=null]
   * @memberof OpenPath
   */
  init(path: string | string[] | null = null) {

    if( path != null ){
      if( typeof path === "string" ){
        this.setPath(path);
      } else if( typeof path === "object" && _.getType(path) === "array" ){
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
  setPath(pathName: string): OpenPath{
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
  setPaths(pathNameArray: string[]): OpenPath{
    for( const pathName of pathNameArray ){
      this.paths.push( pathName );
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
  setFolderByName(folderName: string): boolean | string{
    if( Folders[folderName] != null ){
      this.paths.push(Folders[folderName].path);
      return Folders[folderName].path;
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
   * フォルダを開くコマンドを実行する
   *
   * @returns {boolean}
   * @memberof OpenFolder
   */
  open(): boolean{

    let commandArray:string[] = [];

    for( let path of this.paths ){
      commandArray.push(`start ${path}`);
    }

    const callCommand = new CallCommand(commandArray);

    if( callCommand.exec() ){
      return true;
    }
    return false;

  }
}
