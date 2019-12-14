import _ from "../base/_";

export default class LoadFootage{
  public options: ImportOptions[] = [];
  public option: ImportOptions;

  constructor() {

    this.option = new ImportOptions();
    const file = new File("D:/googledrive/render/temp/solid/Image0001.png");
    this.option.file = file;
    this.option.sequence = true;
  }

  setItem(path: string , isSequence: boolean = false) {
    const option = new ImportOptions();
    option.file = new File(path);
    if( isSequence ){
      option.sequence = true;
    }
    this.options.push( option );
  }

  load() {
    app.project.importFile(this.option);    
  }

}