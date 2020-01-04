import 'extendscript-es5-shim-ts';
// import 'es5-shim';

export default class BaseInfo {
  /**
   *AEのバージョン
   *
   * @type {string}
   * @memberof BaseInfo
   */
  public readonly version: string;

  /**
   *使用している言語
   *
   * @type {string}
   * @memberof BaseInfo
   * @example ja_JP
   */
  public readonly lang: string;

  /**
   *OS情報
   *
   * @type {string}
   * @memberof BaseInfo
   */
  public readonly os: string;

  /**
   *ロケール情報
   *
   * @type {string}
   * @memberof BaseInfo
   */
  public readonly locale: string;
  // public readonly screen: any;
  public readonly info: { [key: string]: string };

  constructor() {
    this.version = app.version;
    this.lang = app.isoLanguage;
    this.os = $.os;
    // this.screen = $.screens;
    this.locale = app.isoLanguage;

    this.info = {
      Version: this.version,
      Language: this.lang,
      OS: this.os,
    };
  }

  /**
   * alertで情報を表示させます。
   * @todo スクリーン情報の追加
   */
  showData(): void {
    let alertText = '';

    for (const key of Object.keys(this.info)) {
      alertText += `${key}: ${this.info[key]} \n`;
    }
    alert(alertText);
  }

  /**
   *OSがWindowsであるかどうかを判定する
   *
   * @returns {boolean}
   * @memberof BaseInfo
   */
  isWindows(): boolean {
    if (this.os) {
      return this.os.toLowerCase().indexOf('windows') !== -1;
    }
    return false;
  }

  /**
   *OSがmacであるかどうかを判定する
   *
   * @returns {boolean}
   * @memberof BaseInfo
   */
  isMac(): boolean {
    if (this.os) {
      return this.os.toLowerCase().indexOf('windows') === -1;
    }
    return false;
  }
}
