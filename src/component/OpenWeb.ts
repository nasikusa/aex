import {URLs} from '../data/URLs';
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