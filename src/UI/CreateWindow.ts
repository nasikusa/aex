import OpenWeb from '../component/OpenWeb';

export default class CreateWindow {

  constructor(){
    var wnd = new Window("palette", "Test Window", [0, 0, 250, 150]);
    var okBtn = wnd.add("button", [55, 100, 140, 135], "OK");
    var cancelBtn = wnd.add("button", [155, 100, 240, 135], "Cancel");
    wnd.center();
    wnd.show();

    okBtn.onClick = function(){
      const ow = new OpenWeb();
      ow.setUrl("https://www.youtube.com/watch?v=v0b7TUVz6lY");
      ow.open();
    }
    cancelBtn.onClick = function(){
        wnd.close();
    }
  }
}