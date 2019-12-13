export default class LoadFootage{
  public option: any;

  constructor() {
    this.option = new ImportOptions(new File("../tsconfig.json"));
    // this.option.file = new ;
  }

  load() {
    app.project.importFile(this.option);    
  }

}