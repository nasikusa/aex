
import Utils from './Utils';

export default class _ extends Utils{
  /**
   * プロジェクトを取得する
   */
  static getProject(): Project | null{
    return app.project;
  }
  /**
   * プロジェクトのアイテムをすべて取得する
   */
  static getItems(): ItemCollection | null{
    return app.project.items;
  }
  /**
   * アクティブなプロジェクトのアイテムを取得する
   */
  static getActiveItem(): Item | null{
    const res = app.project.activeItem;
    return res;
  }
  /**
   * 選択しているレイヤーをすべて取得する
   */
  static getSelectedLayers(): CompItem | null{
    // @ts-ignore
    return app.project.activeItem.selectedLayers;
  }
  /**
   * アクティブなコンポジションのレイヤーをすべて取得する
   */
  static getActiveItemLayers(): LayerCollection | null{
    
    // @ts-ignore
    return app.project.activeItem.layers;
  }
  
  /**
   * historyを開始する
   * @param name 
   */
  static historyStart(name: string = "action"){
    app.beginUndoGroup(name);
  }
  /**
   * historyを終了する
   */
  static historyEnd(){
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

  static addAdjustmentLayer() {
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


  static changeFrameRate( framerate:number ,  item:any = _.getActiveItem() ){
    item.frameRate = framerate;
  }

}