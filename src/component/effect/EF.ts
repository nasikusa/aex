import {Effects} from '../../data/Effects';

export default class EF {
  static getDataByName(name: string){
    return Effects[name];
  }

  static getDataHasName(name: string , type: string){
    for( let key of Object.keys(Effects) ){
      if( !Effects[key][type] ) continue;
      if( Effects[key][type] === name ){
        return Effects[key];
      }
    }
    return false;
  }

  static has(name: string){
    return EF.getDataByName(name);
  }
  static by(name: string): string{
    return EF.getDataByName(name).match;
  }

  static hasEn(englishName: string){
    return EF.getDataHasName(englishName , "en");
  }
  static hasJa(janeneseName: string){
    return EF.getDataHasName(janeneseName , "ja");
  }
  static hasQ(quickName: string){
    return EF.getDataHasName(quickName , "q");
  }
  static hasM(matchName: string){
    return EF.getDataHasName(matchName , "match");
  }

  static byEn(englishName: string): string | undefined{
    const URLObject = EF.hasEn(englishName);
    if( typeof URLObject === "object"){
      return URLObject.match;
  }
  static byJa(englishName: string){
    return EF.getDataHasName(englishName , "ja").match;
  }
  static byJa(japaneseName: string){
    const URLObject = EF.hasJa(japaneseName);
    if( typeof URLObject === "object"){
      return URLObject.match;
  }
  static byM(englishName: string){
    return EF.getDataHasName(englishName , "match").match;
  }

  static byQ(quickName: string){
    const URLObject = EF.hasQ(quickName);
    if( typeof URLObject === "object"){
      return URLObject.match;
    }
  }

}
