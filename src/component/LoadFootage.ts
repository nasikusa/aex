import _ from "../base/_";
import {ProjectPath} from '../data/Paths';

export default class LoadFootage{
  public options: ImportOptions[] = [];

  constructor() {



  }

  /**
   * ロードするファイルを設定します。
   * @param path ファイルのパス
   * @param isSequence 連番ファイルであるかどうか
   */
  setItem(path: string , isSequence: boolean = false) {
    const option = new ImportOptions();
    option.file = new File(path);
    if( isSequence ){
      option.sequence = true;
    }
    this.options.push( option );
  }

  setSequenceByProject(projectName: string): boolean {
    const projectData = ProjectPath[projectName];
    if( !projectData ) return false;
    const folders = projectData.assetsFolders;
    const fileName = projectData.baseRenderName;

    let path: string = "";
    
    for( let item of folders ){
      path += `${projectData.renderRoot}`;
      if( item.isSequence ){
        path += `${item.name}/${fileName}`;
        this.setItem(path, true);
      } else {

      }
      path = "";
    }

    return true;

  }

  /**
   * すべてのファイル設定を削除します
   */
  removeAllItem() {
    this.options = [];
  }

  
  load() {
    for( const option of this.options ){
      app.project.importFile(option);    
    }
  }

}