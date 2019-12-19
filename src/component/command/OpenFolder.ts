import CallCommand from '../../base/CallCommand';
import {Folders} from '../../data/Folders';

export default class OpenFolder {

  public paths: string[];
  protected callCommand: CallCommand;

  constructor(){
    this.paths = [];
  }

  addFolderByName(folderName: string): boolean | string{
    if( Folders[folderName] != null ){
      this.paths.push(Folders[folderName].path);
      return Folders[folderName].path;
    }
    return false;
  }

  open(): boolean{

    for( let path of this.paths ){
      this.callCommand = new CallCommand(`start ${path}`);
      this.callCommand.exec();
      return true;
    }
    return false;
  }
}
