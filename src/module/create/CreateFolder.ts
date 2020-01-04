export default class CreateFolder {
  public foldersStrings: string[];
  public folders: any;
  protected items: any;

  constructor() {
    this.foldersStrings = [];
    this.folders = [];
    this.items = app.project.items;
  }

  make(): void {
    if (this.foldersStrings.length !== 0) {
      for (const folder of this.foldersStrings) {
        this.folders.push(this.items.addFolder(folder));
      }
    }
  }
}
