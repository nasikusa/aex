import _ from '../../base/_';
import BaseInfo from '../../base/BaseInfo';
import Debug from '../../debug/Debug';

/**
 * AEからコマンドラインにコマンドを実行させるためのクラス
 *
 * @export
 * @class CallCommand
 * @todo 複数コマンド時のcd & xx で移動できていない？
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
  protected result: string = '';

  /**
   * OS情報などwin,mac対応のためにベースとなる基礎情報を取得します。
   *
   * @protected
   * @type {BaseInfo}
   * @memberof CallCommand
   */
  protected info: BaseInfo = new BaseInfo();

  /**
   *使用しているOSの種類を格納する
   *
   * @type {string}
   * @memberof CallCommand
   */
  public readonly os: string = _.isWindows() ? 'windows' : 'mac';

  /**
   *OSがwindowsであるか
   *
   * @type {boolean}
   * @memberof CallCommand
   */
  public readonly isWindows: boolean = _.isWindows();

  /**
   *OSがMacであるか
   *
   * @type {boolean}
   * @memberof CallCommand
   */
  public readonly isMac: boolean = _.isMac();

  public readonly hasPermission: boolean = _.hasPermissionToNetworkAccess();

  /**
   *実行時に制限されるコマンドの配列(win)
   *
   * @type {string[]}
   * @memberof CallCommand
   */
  protected restrictedWinCommandName: string[] = ['del'];

  /**
   *実行時に制限されるコマンドの配列(mac)
   *
   * @type {string[]}
   * @memberof CallCommand
   */
  protected restrictedMacCommandName: string[] = ['rm'];

  /**
   * 生成時に引数にコマンドがセットされていれば入れる。なければそのまま。
   * @param {(string | string[])} コマンド文章
   * @memberof CallCommand
   */
  constructor(inputComandStr?: string | string[]) {
    if (inputComandStr != null) {
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
  getResult(isUpdate: boolean = true): string {
    if (isUpdate) {
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
  setResult(): boolean {
    this.result = '';
    for (let i = 0; i < this.command.length; i++) {
      if (i === this.command.length - 1) {
        this.result += `${this.command[i]}`;
      } else {
        this.result += `${this.command[i]} & `;
      }
    }

    if (this.result != null && this.result === '') {
      return true;
    }
    return false;
  }

  /**
   * コマンド文章をセットする
   *
   * @param {(string | string[])} str　コマンドテキスト、もしくはコマンドテキストの配列
   * @param {boolean} [isUpdateResult=true] コマンドをセットした後に、最終的に実行されるコマンドも更新するかどうか
   * @returns {string[]} コマンド配列
   * @memberof CallCommand
   */
  setCommand(str: string | string[], isUpdateResult: boolean = true): string[] {
    this.command = [];
    if (_.getType(str) === 'string' && typeof str === 'string') {
      str = _.trim(str);
      this.command.push(str);
    } else if (_.getType(str) === 'array' && typeof str === 'object') {
      for (let commandStr of str) {
        commandStr = _.trim(commandStr);
        this.command.push(commandStr);
      }
    }

    if (isUpdateResult) {
      this.setResult();
    }

    return this.command;
  }

  /**
   *制限コマンドをセットする
   *
   * @param {string} commandName コマンド名
   * @returns {string[]} 制限コマンド配列を返す
   * @memberof CallCommand
   */
  setRestrictedCommand(commandName: string): string[] {
    if (this.isWindows) {
      this.restrictedWinCommandName.push(commandName);
      return this.restrictedWinCommandName;
    }

    this.restrictedMacCommandName.push(commandName);
    return this.restrictedMacCommandName;
  }

  removeRestrictedCommand(commandPosition?: number) {}

  getRestrictedCommand() {}

  /**
   *制限されたコマンドが使用されていないか確認する関数
   *
   * @returns {boolean}
   * @memberof CallCommand
   */
  check(): boolean {
    let restrictedStrings: string[] = [];
    if (this.isWindows) {
      restrictedStrings = this.restrictedWinCommandName;
    } else if (this.isMac) {
      restrictedStrings = this.restrictedMacCommandName;
    }

    for (let i = 0; i < restrictedStrings.length; i++) {
      /**
       * チェック用の正規表現オブジェクト
       *
       */
      let rgep = new RegExp(`^${restrictedStrings[i]}`, 'i');
      for (let j = 0; j < this.command.length; j++) {
        if (rgep.test(this.command[j])) {
          return false;
        }
      }
    }

    return true;
  }

  /**
   *すべてのセットされたコマンドを削除する
   *
   * @return {boolean} 成否
   * @memberof CallCommand
   */
  removeAllCommands(): boolean {
    this.command.length = 0;
    if (this.command === []) {
      return true;
    }
    return false;
  }

  /**
   * コマンドを実行する関数
   *
   * @param {boolean} isRemoveCommandAfterExec       コマンドを実行した後に、コマンド配列の中身を削除するかどうか
   * @param {boolean} isReturnOnlyBoolean            コマンドラインの実行結果を返すのではなく、成否のboolのみを返すか
   * @param {boolean} isForceExecRestrictedCommand   制限されたコマンドを強制的に実行するか
   * @returns {string | boolean} コマンドの実行結果を返す。失敗した場合はfalseを返す。
   * @memberof CallCommand
   * @todo mac対応
   */
  exec(
    isRemoveCommandAfterExec: boolean = true,
    isReturnOnlyBoolean: boolean = false,
    isForceExecRestrictedCommand: boolean = false
  ): string | boolean {

    if(!_.checkAccessToNetwork()){
      return false;
    }

    /**
     * コマンドを実行したあとに、返ってきた文字列をここに格納する
     */
    let callCommandResult: string = '';

    if (!this.check() && isForceExecRestrictedCommand === false) {
      return false;
    }

    if (this.isWindows) {
      callCommandResult = system.callSystem(`cmd.exe /c \"${this.result} /t\"`);

      if (isRemoveCommandAfterExec) {
        this.removeAllCommands();
      }

      if (isReturnOnlyBoolean) {
        return true;
      }
    } else if (this.isMac) {
      callCommandResult = system.callSystem(`${this.result}`);

      if (isRemoveCommandAfterExec) {
        this.removeAllCommands();
      }

      if (isReturnOnlyBoolean) {
        return true;
      }
    }

    if (callCommandResult != null && callCommandResult !== '' && isReturnOnlyBoolean === false) {
      return callCommandResult;
    } else {
      return false;
    }
  }
}
