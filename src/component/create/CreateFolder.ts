export default class CreateFolder {

  public foldersStrings: string[];
  public folders: any;
  protected items: any;

  constructor(){
    this.foldersStrings = [];
    this.folders = [];
    this.items = app.project.items;
  }

  make() {
    if( this.foldersStrings.length !== 0 ){
      for( let folder of this.foldersStrings ){
        this.folders.push( this.items.addFolder(folder) );
      }
    }
  }
}
