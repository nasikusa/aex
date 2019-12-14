
import Utils from './Utils';

export default class _ extends Utils{
  static getProject(){
    return app.project;
  }
  static getItems(){
    return app.project.items;
  }
  static getActiveItem(){
    return app.project.activeItem;
  }
  static getSelectedLayers(){
    // @ts-ignore
    return app.project.activeItem.selectedLayers;
  }
  static getActiveItemLayers(){
    // @ts-ignore
    return app.project.activeItem.layers;
  }
  
  /**
   * historyを開始する
   * @param name 
   */
  static startUndoGroup(name: string = "action"){
    app.beginUndoGroup(name);
  }
  /**
   * historyを終了する
   */
  static endUndoGroup(){
    app.endUndoGroup();
  }
  /**
   * プロジェクトを開く
   * @param name 
   */
  static openProject(name: string){
    const file = new File(name);
    if (file.exists){
      const new_project = app.open(file);
      return new_project;
    }
  }

  static addAdj() {
    var color = [1,1,1];
    var  name = "調整レイヤー";
    // @ts-ignore
    var n =  app.project.item(1).layers.addSolid(color,name,100,100,1,1);
    var comp = n.containingComp;
    n.outPoint = comp.duration;
    n.adjustmentLayer = true;
    n.source.width = comp.width;
    n.source.height = comp.height;
    n.source.pixelAspect = comp.pixelAspect;
    return n;
  }

}


// CompItem.addAdjustment = function(){
//   var color = [1,1,1];
//   var  name = "調整レイヤー";
//   var width = this.width;
//   var height = this.height;
//   var pixelAspect = this.pixelAspect;
//   var duration = this.duration;
//   var n = this.layers.addSolid(color,name,width,height,pixelAspect,duration);
//   n.adjustmentLayer = true;
//   return n;
// }