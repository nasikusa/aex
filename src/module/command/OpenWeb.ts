import { URLs } from '../../data/URLs';
import _ from '../../base/_';
import CallCommand from './CallCommand';

/**
 *AEからWebサイトを開くためのクラス
 *
 * @export
 * @class OpenWeb
 */
export default class OpenWeb {
  /**
   * urlをセットするための配列
   *
   * @type {string[]}
   * @memberof OpenWeb
   */
  public urls: string[] = [];

  /**
   * 初期化時にURLが引数にあれば、それをそのままセットする。なければスルー。
   * @param inputUrl
   */
  constructor(inputUrl?: string | string[]) {
    if (inputUrl != null) {
      if (typeof inputUrl === 'string' && _.getType(inputUrl) === 'string') {
        this.setUrl(inputUrl);
      }
      if (typeof inputUrl === 'object' && _.getType(inputUrl) === 'array') {
        this.setUrls(inputUrl);
      }
    }
  }

  /**
   * 一つのURLをセットする
   * @param url
   */
  setUrl(url: string): OpenWeb {
    this.urls.push(url);
    return this;
  }

  /**
   * 複数のURLをまとめてセットする
   * @param urlArray
   * @todo 上とまとめたほうがいい？、基本的なメソッドの形は一定にしたほうがいいのかも？
   */
  setUrls(urlArray: string[]): OpenWeb {
    for (const url of urlArray) {
      this.urls.push(url);
    }
    return this;
  }

  /**
   *URLsオブジェクトからurlを見つけてセットする
   *
   * @param {string} urlObjectName
   * @memberof OpenWeb
   * @return {boolean} 成功すればtrue,失敗すればfalse
   */
  setUrlByName(urlObjectName: string): boolean {
    const urlObject = URLs[urlObjectName];
    if (urlObject != null) {
      this.urls.push(urlObject.url);
      return true;
    }
    return false;
  }

  /**
   * 指定の場所のurlを取得する
   *
   * @param {number} order
   * @returns {(string | undefined)}
   * @memberof OpenWeb
   */
  getUrl(order: number): string | undefined {
    if (this.urls[order] != null) {
      return this.urls[order];
    }
  }

  /**
   * セットされたURL配列を取得する
   */
  getUrls(): string[] {
    return this.urls;
  }

  /**
   * セットされたすべてのURL配列を削除する
   */
  removeAllUrl(): void {
    this.urls = [];
  }

  search() {}

  /**
   * webページを開くコマンドを実行する関数
   *
   * @returns {boolean}
   * @memberof OpenWeb
   */
  open(): boolean {
    if (this.urls.length !== 0) {
      /**
       * 一時的にコマンドを入れておくための配列
       */
      const CommandArray: string[] = [];

      for (let i = 0; i < this.urls.length; i++) {
        CommandArray.push(`start ${this.urls[i]}`);
      }

      const callCommand = new CallCommand(CommandArray);
      const isExecCommand = callCommand.exec(true, true);
      if (typeof isExecCommand === 'boolean') {
        return isExecCommand;
      }
      return false;
    }
    return false;
  }
}
