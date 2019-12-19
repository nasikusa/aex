import _ from '../base/_';
import BaseInfo from '../base/BaseInfo';

/**
 * AEからコマンドラインにコマンドを実行させるためのクラス
 *
 * @export
 * @class CallCommand
 */
export default class CallCommand {

  /**
   * 実行するコマンド文章を入れる配列
   *
   * @protected
   * @type {string[]}
   * @memberof CallCommand
   */
  protected command: string[] = [];

  /**
   * 複数のコマンドを実行する際は & でつなげるため、最終的なコマンドをここに入れます。
   *
   * @protected
   * @type {string}
   * @memberof CallCommand
   */
  protected result: string = "";

  /**
   * OS情報などwin,mac対応のためにベースとなる基礎情報を取得します。
   *
   * @protected
   * @type {BaseInfo}
   * @memberof CallCommand
   */
  protected info: BaseInfo = new BaseInfo();

  /**
   * 生成時に引数にコマンドがセットされていれば入れる。なければそのまま。
   * @param {(string | string[] | null)} [str=null] コマンド文章
   * @memberof CallCommand
   */
  constructor(inputComandStr: string | string[] | null = null){
    if( inputComandStr != null ){
      this.setCommand(inputComandStr);
      this.setResult();
    }
  }

  /**
   * 最終的に実行されるコマンドを取得する
   *
   * @param {boolean} [isUpdate=true]
   * @returns {string}
   * @memberof CallCommand
   */
  getResult( isUpdate: boolean = true ): string{
    if( isUpdate ){
      this.setResult();
    }
    return this.result;
  }

  /**
   * 最終的に実行されるコマンド文章を組み立てる。主に複数のコマンドがある場合に有効。
   *
   * @memberof CallCommand
   * @return {boolean} 成功すればtrue , 失敗すればfalse
   */
  setResult(): boolean{
    this.result = "";
    for( let i = 0 ; i < this.command.length; i++ ){
      if( i === this.command.length - 1 ){
        this.result += `${this.command[i]}`
      } else {
        this.result += `${this.command[i]} & `;
      }
    }

    if( this.result != null && this.result === "" ){
      return true;
    }
    return false;
  }

  /**
   * コマンド文章をセットする
   *
   * @param {(string | string[])} str
   * @param {boolean} [isUpdateResult=true]
   * @returns {string[]}
   * @memberof CallCommand
   */
  setCommand(str: string | string[] , isUpdateResult: boolean = true): string[]{
    this.command = [];
    if( _.getType(str) === "string" && typeof str === "string" ){
      this.command.push(str);
    } else if(  _.getType(str) === "array" && typeof str === "object" ) {
      this.command = str;
    }

    if(isUpdateResult){
      this.setResult();
    }

    return this.command;

  }

  /**
   * コマンドを実行する関数
   *
   * @param {boolean} isReturnOnlyBoolean コマンドラインの実行結果を返すのではなく、成否のboolのみを返すか
   * @returns {string | boolean} コマンドの実行結果を返す。失敗した場合はfalseを返す。
   * @memberof CallCommand
   * @todo mac対応
   */
  exec( isReturnOnlyBoolean = false): string | boolean{

    let callCommandResult:string = "";
    
    if( this.info.isWindows() ){
      callCommandResult = system.callSystem(`cmd.exe /c \"${this.result} /t\"`); 

      if( isReturnOnlyBoolean ){
        return true;
      }
    }
    
    if( callCommandResult != null && callCommandResult !== "" && isReturnOnlyBoolean === false ){
      return callCommandResult;
    }else{
      return false;
    }
  }

}
