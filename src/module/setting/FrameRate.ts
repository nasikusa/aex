export default class FrameRate {

  public targetItem :CompItem[] = [];

  constructor(){

  }

  chage(framerate: number){
    this.targetItem.forEach(function(val: CompItem , iondex: number){
      val.frameRate = framerate;
    }.bind(this));
  }
}
