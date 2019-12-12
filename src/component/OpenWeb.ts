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
    this.urls.push("http://nasikusa.net/blend-monitoring");
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
        system.callSystem(`cmd.exe /c \"start ${this.urls[i]} /t\"`); 
      }
    }
  }

  

}