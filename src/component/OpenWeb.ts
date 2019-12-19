import {URLs, SeachUrls} from '../data/URLs';
import _ from '../base/_';
import CallCommand from '../base/CallCommand';

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
  constructor(inputUrl: string | string[] | null = null) {
    if( inputUrl != null ){
      if( typeof inputUrl === "string" && _.getType(inputUrl) === "string" ){
        this.setUrl(inputUrl);
      }
      if( typeof inputUrl === "object" && _.getType(inputUrl) === "array" ){
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
   */
  setUrls(urlArray: string[]): OpenWeb{
    for( const url of urlArray ){
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
  setUrlByName(urlObjectName: string): boolean{
    const urlObject = URLs[urlObjectName];
    if( urlObject != null ){
      this.urls.push( urlObject.url );
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
  getUrl(order: number): string | undefined{
    if( this.urls[order] != null ){
      return this.urls[order];
    }
  }

  /**
   * セットされたURL配列を取得する
   */
  getUrls():string[] {
    return this.urls;
  }

  /**
   * セットされたすべてのURL配列を削除する
   */
  removeAllUrl(): void{
    this.urls = [];
  }

  search(){

  }

  /**
   * リファレンス用のサイトをブラウザで開く
   * @param searchStr 検索したい文字
   * @todo 多言語化、UTF8対応、タイプごとの絞り込み、継承して別クラスにしたほうがいい？、Fileでsettingファイルを保存できると楽？（どこだけ開くとか）、サジェスチョン、URLエンコードするとgoogleで検索できなくなる
   */
  searchReference(searchStr: string): boolean{

    this.removeAllUrl();

    for( const key of Object.keys(SeachUrls) ){

      /**
       * 最終的に生成されるURL
       */
      let url: string = `${SeachUrls[key]["url"]}`;

      /**
       * クエリ型か、URL型でURLを構成しているか
       */
      const searchType: string = SeachUrls[key]["searchType"];

      if( searchType === "query" ){
        const baseQuery: string = SeachUrls[key]["baseQuery"];
        const seachQuery: string = SeachUrls[key]["searchQuery"];

        url += "?";

        if( baseQuery ){
          url += `${baseQuery}&`;
        }
        url += `${seachQuery}=${searchStr}`; 

        url = url.replace("&", "^&");

      } else if( searchType === "url" ){
        url += searchStr;
      }

      url = encodeURI(url);

      this.setUrl(url);

    }

    const isOpenSite = this.open();

    return isOpenSite;

  }

  /**
   * webページを開くコマンドを実行する関数
   *
   * @returns {boolean} 
   * @memberof OpenWeb
   */
  open(): boolean{
    if( this.urls.length !== 0 ){

      /** 
       * 一時的にコマンドを入れておくための配列
       */
      const CommandArray: string[] = [];

      for( let i = 0 ; i < this.urls.length ; i++ ){
        CommandArray.push(`start ${this.urls[i]}`);
      }
      
      const callCommand = new CallCommand(CommandArray);
      const isExecCommand = callCommand.exec(true);
      //@ts-ignore
      return isExecCommand;
    }
    return false;
  }



}