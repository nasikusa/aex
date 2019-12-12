export default class LoadFootage{
  public option: any;

  constructor() {
    this.option = new ImportOptions();
    this.option.file = new File("D:/googledrive/render/temp/shadow/Image0001.png");
  }

  load() {
    app.project.importFile(this.option);    
  }

}