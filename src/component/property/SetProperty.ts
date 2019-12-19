import _ from '../../base/_';
export default class SetProperty{

  protected selectedLayers: CompItem | null = _.getSelectedLayers();

  constructor() {
  }

  updateSelected(){
    this.selectedLayers = _.getSelectedLayers();
  }


};

// const item = _.getSelectedLayers();
// // alert(item[0].property("effect")(1)(1).setValue(30));
// // alert(item[0].property("effect")("ADBE Paint Bucket")("ADBE Paint Bucket-0001").value);
// alert(item[0].property("effect").addProperty('ADBE Paint Bucket'));
