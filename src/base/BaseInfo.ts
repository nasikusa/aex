export default class BaseInfo{
  public encoding: string;
  public version: string;
  public lang: string;
  public os: string;
  public locale: string;
  public screen: any;

  constructor(){
    this.encoding = $.appEncoding;
    this.version = app.version;
    this.lang = app.isoLanguage;
    this.locale = $.locale;
    this.os = $.os;
    this.screen = $.screens ;
  }

  showData() {
    alert("version: " + this.version + "\n" + 
          "lang: " + this.lang + "\n" +
          "os: " + this.os + "\n" + 
          "locale: " + this.locale  + "\n" + 
          "encoding: " + this.encoding 
    );
  }
}