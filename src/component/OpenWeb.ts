import {URLs, SeachUrls} from '../data/URLs';
import _ from '../base/_';
import CallCommand from '../base/CallCommand';

export default class OpenWeb {

  public urls: string[] = [];

  constructor(inputUrl: any = null) {
    if( inputUrl != null ){
      if( _.getType(inputUrl) === "string" ){
        this.setUrl(inputUrl);
      }
      if( _.getType(inputUrl) === "array" ){
        this.setUrls(inputUrl);
      }
    }
  }

  setUrl(url: string): void {
    this.urls.push(url)
  }

  setUrls(urlArray: string[]): void{
    for( const url of urlArray ){
      this.urls.push(url);
    }
  }

  setBlendMonitoring(): void{
    this.urls.push(URLs.blend);
  }
  
  getUrl(order: number): string | undefined{
    if( this.urls[order] != null ){
      return this.urls[order];
    }
    return undefined;
  }

  getUrls():string[] {
    return this.urls;
  }


  removeAllUrl(): void{
    this.urls = [];
  }

  search(){

  }

  searchReference(searchStr: string){

    this.removeAllUrl();

    for( let key of Object.keys(SeachUrls) ){
      let url: string = `${SeachUrls[key]["url"]}`;
      const seachType = SeachUrls[key]["seachType"];

      if( seachType === "query" ){
        const baseQuery = SeachUrls[key]["baseQuery"];
        const seachQuery = SeachUrls[key]["searchQuery"];

        url += "?";

        if( baseQuery ){
          url += `${baseQuery}&`;
        }
        url += `${seachQuery}=${searchStr}`; 

        url = url.replace("&", "^&");

      } else if( seachType === "url" ){
        url += searchStr;
      }


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