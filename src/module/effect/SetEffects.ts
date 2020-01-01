// import SetProperty from '../property/SetProperty';
// import { Effects } from '../../data/Effects';
// import EF from './EF';
// import _ from '../../base/_';

// export default class SetEffects extends SetProperty {
//   public targetLayers = [];

//   constructor() {
//     super();
//   }

//   setLayers(layers) {}

//   // @ts-ignore
//   dropBlack(layer = this.selectedLayers[0]) {
//     const cc = layer.property('effect').addProperty(EF.byJa('チャンネルコンバイナー'));
//     layer
//       .property('effect')(EF.byJa('チャンネルコンバイナー'))('ADBE Channel Combiner-0005')
//       .setValue(14);
//     layer
//       .property('effect')(EF.byJa('チャンネルコンバイナー'))('ADBE Channel Combiner-0006')
//       .setValue(4);
//     const rcm = layer.property('effect').addProperty(EF.byJa('カラーマット削除'));
//   }

//   // @ts-ignore
//   setColorPreset(layer = this.selectedLayers[0]) {
//     layer.property('effect').addProperty(EF.byJa('レベル'));
//     layer.property('effect').addProperty(EF.byJa('チャンネルミキサー'));
//     layer.property('effect').addProperty(EF.byJa('特定色域の選択'));
//     layer.property('effect').addProperty(EF.byJa('カラーバランス'));
//     layer.property('effect').addProperty(EF.byJa('レンズフィルタ'));
//     layer.property('effect').addProperty(EF.byJa('色相/彩度'));
//   }

//   setEffectByName() {}
// }

// const item = _.getSelectedLayers();
// // alert(item[0].property("effect")(1)(1).setValue(30));
// // alert(item[0].property("effect")("ADBE Paint Bucket")("ADBE Paint Bucket-0001").value);
// alert(item[0].property("effect").addProperty('ADBE Paint Bucket'));
