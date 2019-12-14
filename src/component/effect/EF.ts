import {Effects} from '../../data/Effects';

export default class EF {
  static getDataByName(name: string){
    return Effects[name];
  }

  static getDataHasName(englishName: string , type: string){
    for( let key of Object.keys(Effects) ){
      if( !Effects[key][type] ) continue;
      if( Effects[key][type] === englishName ){
        return Effects[key];
      }
    }
    return false;
  }

  static has(name: string){
    return EF.getDataByName(name);
  }
  static by(name: string){
    return EF.getDataByName(name).match;
  }

  static hasEn(englishName: string){
    return EF.getDataHasName(englishName , "en");
  }
  static hasJa(englishName: string){
    return EF.getDataHasName(englishName , "ja");
  }
  static hasQ(englishName: string){
    return EF.getDataHasName(englishName , "q");
  }
  static hasM(englishName: string){
    return EF.getDataHasName(englishName , "match");
  }

  static byEn(englishName: string){
    return EF.getDataHasName(englishName , "en").match;
  }
  static byJa(englishName: string){
    return EF.getDataHasName(englishName , "ja").match;
  }
  static byQ(englishName: string){
    return EF.getDataHasName(englishName , "q").match;
  }
  static byM(englishName: string){
    return EF.getDataHasName(englishName , "match").match;
  }


}