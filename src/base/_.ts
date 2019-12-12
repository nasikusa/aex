export default class _{
  static getProject(){
    return app.project;
  }
  getItem(){
    return app.project.items;
  }
  static getActive(){
    return app.project.activeItem;
  }
  static getSelectedLayer(){
    return app.project.activeItem.selectedLayers;
  }
  static startUndoGroup(name: string = "action"){
    app.beginUndoGroup(name);
  }
  static endUndoGroup(){
    app.endUndoGroup();
  }
}