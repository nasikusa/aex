import _ from '../base/_';

export default class CreateLayer {

  protected compLayers: LayerCollection | null = _.getActiveItemLayers();

  constructor() {
    
  }

  setTargetComp() {

  }

  createAdjustment(inputName: string = "調整レイヤー") {
    const color = [1,1,1];
    const  name = inputName;
    // @ts-ignore
    const n = this.compLayers.addSolid(color,name,100,100,1,1);
    const comp = n.containingComp;
    n.outPoint = comp.duration;
    n.adjustmentLayer = true;
    n.source.width = comp.width;
    n.source.height = comp.height;
    n.source.pixelAspect = comp.pixelAspect;
    return n;

  }

  createSolid() {

  }


}