import 'extendscript-es5-shim-ts';

export default class BaseInfo {
  public readonly version: string;
  public readonly lang: string;
  public readonly os: string;
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
   * @todo スクリーン情報
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
