import {URLs, SeachUrls} from '../data/URLs';
import _ from '../base/_';
import CallCommand from '../base/CallCommand';

export default class OpenWeb {

  public urls: string[] = [];

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
  setUrl(url: string): void {
    this.urls.push(url)
  }

  /**
   * 複数のURLをまとめてセットする
   * @param urlArray 
   */
  setUrls(urlArray: string[]): void{
    for( const url of urlArray ){
      this.urls.push(url);
    }
  }

  setBlendMonitoring(): void{
    this.urls.push(URLs.blend);
  }
  
  getUrl(order: number): string | boolean{
    if( this.urls[order] != null ){
      return this.urls[order];
    }
    return false;
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
  searchReference(searchStr: string){

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

    this.open();

  }

  open(): void{
    if( this.urls.length !== 0 ){
      for( let i = 0 ; i < this.urls.length ; i++ ){
        const callCommand = new CallCommand(`start ${this.urls[i]}`);
        callCommand.exec();
      }
    }
  }



}