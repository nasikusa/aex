import OpenWeb from '../component/command/OpenWeb';

interface UIPanel {
  open(window: Window): void | boolean;
  close(window: Window): void | boolean;
}

export default class CreateWindow implements UIPanel {

  constructor(){
    // var wnd = new Window("palette", "Test Window", [0, 0, 250, 150]);
    // var okBtn = wnd.add("button", [55, 100, 180, 135], "OK");
    // var cancelBtn = wnd.add("button", [155, 100, 240, 135], "Cancel");
    // this.toCenter(wnd);
    // this.open(wnd);

    // okBtn.onClick = function(){
    //   const ow = new OpenWeb();
    //   ow.setUrl("https://www.youtube.com/watch?v=v0b7TUVz6lY");
    //   ow.open();
    // }
    // cancelBtn.onClick = function(){
    //     this.close(wnd);
    // }

  }

  exmaple() {
    var wnd = new Window("palette", "Test Window", [0, 0, 250, 150]);
    var checkA = wnd.add("checkbox", [30, 10, 220, 30],"入力欄を表示");
    checkA.value=false;
    var input: EditText = wnd.add("edittext", [30, 40, 220, 60]);
    input.visible = false;
    wnd.center();
    wnd.show();

    checkA.onClick = function(){
        if(checkA.value == true){
            input.visible = true;
        }
        else{
            input.visible = false;
        }
    }

    input.onEnterKey= function(e){
      const openWeb = new OpenWeb();
      openWeb.searchReference(input.text);
    }

  }

  toCenter(window: Window): void {
    window.center();
  }

  open(window: Window): void {
    window.show();
  }

  close(window: Window): void {
    window.close();
  }

}
