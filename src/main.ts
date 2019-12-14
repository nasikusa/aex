import "extendscript-es5-shim-ts";

import Polyfill from './base/Polyfill';
import BaseInfo from './base/BaseInfo';
import _ from './base/_';
import OpenWeb from './component/OpenWeb';
import CreateWindow from './UI/CreateWindow';
import CreateFolder from './component/CreateFolder';
import LoadTemplate from './component/LoadTemplate';
import LoadFootage from './component/LoadFootage';
import {URLs} from './data/URLs';
import CallCommand from './base/CallCommand';
import OpenFolder from './component/OpenFolder';

// const openWeb = new OpenWeb();
// openWeb.searchReference("manta");
// const loadFootage = new LoadFootage();
// loadFootage.load();

const loadfootage = new LoadFootage();
loadfootage.setSequenceByProject('fish1');
// loadfootage.setItem("D:/googledrive/render/fish1/line/Image0001.png" , true);
// loadfootage.setItem("D:/googledrive/render/fish1/solid/Image0001.png" , true);
// loadfootage.setItem("D:/googledrive/render/fish1/shadow/Image0001.png" , true);
loadfootage.load();

// const cm = new CallCommand();

// const item = _.getSelectedLayers();
// // alert(item[0].property("effect")(1)(1).setValue(30));
// // alert(item[0].property("effect")("ADBE Paint Bucket")("ADBE Paint Bucket-0001").value);
// alert(item[0].property("effect").addProperty('ADBE Paint Bucket'));


// app.project.item(1).layer(1).addProperty("ブラー(ガウス)");
// app.project.item(1).layer(1)("Effects")("Fast Blur")("Blurriness").setValue(17);


// cm.setCommand("dir");
// const res = cm.exec();
// alert(res);

// const opf = new OpenFolder();
// opf.addFolderByName("material-water");
// opf.open();


// _.addAdj();
// callCommand.open();

// @ts-ignore
// const options = new ImportOptions(new File("D:/googledrive/render/temp/solid/Image0001.png"));
// // options.sequence = true;
// app.project.importFile(options);  
