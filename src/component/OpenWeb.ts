import {URLs} from '../data/URLs';
import CallCommand from '../base/CallCommand';

export default class OpenWeb {

  public urls: string[];

  constructor() {
    // alert('test');
    this.urls = [];
  }

  setUrl(url: string): void {
    this.urls.push(url)
  }

  setUrls(urlArray: string[]): void{
    for( let url of urlArray ){
      this.urls.push(url);
    }
  }

  setBlendMonitoring(): void{
    // this.urls.push("http://nasikusa.net/blend-monitoring");
    this.urls.push(URLs.blend);
  }
  
  getUrl(order: number): string{
    if( this.urls[order] != null ){
      return this.urls[order];
    }
  }

  getUrls():string[] {
    return this.urls;
  }


  removeAllUrl(): void{
    this.urls = [];
  }

  open(): void{
    if( this.urls.length !== 0 ){
      for( let i = 0 ; i < this.urls.length ; i++ ){
        const callCommand = new CallCommand(`start ${this.urls[i]}`);
        callCommand.exec();
        // system.callSystem(`cmd.exe /c \"start  /t\"`); 
      }
    }
  }



}