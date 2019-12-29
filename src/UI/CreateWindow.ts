import OpenWeb from '../module/command/OpenWeb';

export default class CreateWindow {

  public panelWidth: number = 200;
  public panelMargin: number = 10;
  public panelInnerWidth: number = this.panelWidth - this.panelMargin;
  public isScriptUIPanel: boolean = false;
  public wnd: Window;
  public panelTitle: string;
  public elementsArray: any[] = [];
  public ordersArray: any[] = [];

  constructor(isScriptUIPanel: boolean = true, panelWidth: number = 200 , panelTitle: string = ''){
    this.isScriptUIPanel = isScriptUIPanel;
    this.panelWidth = panelWidth;
    this.panelTitle = panelTitle;
    this.initPanel();
  }

  initPanel(){

    if( this.isScriptUIPanel ){
      // this.wnd = (thisObject instanceof Panel) ? thisObject : new Window("palette", "Dockable Script", undefined, {resizeable:true, closeButton: true});
      this.wnd = new Window("palette", this.panelTitle , undefined, {resizeable:true, closeButton: true});
    } else {
      this.wnd = new Window("palette", this.panelTitle , undefined, {resizeable:true, closeButton: true});
    }
  wnd.margins = 20;

  }

  addButton(){

  }

  addEditText(){
    var et = wnd.add('edittext',{x:0,y:100,width:130,height: 30}, 'search txt');
  }

  createWindow(){

  }

  setEvent(){

  }

}
