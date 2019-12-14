

import Polyfill from './base/Polyfill';
import BaseInfo from './base/BaseInfo';
import _ from './base/_';
import CreateLayer from './createLayer';
import OpenWeb from './component/OpenWeb';
import CreateWindow from './UI/CreateWindow';
import CreateFolder from './component/CreateFolder';
import LoadTemplate from './component/LoadTemplate';
import LoadFootage from './component/LoadFootage';
import {URLs} from './data/URLs';

import OpenFolder from './component/OpenFolder';

const opf = new OpenFolder();
opf.addFolderByName("material-water");
opf.open();

// alert(_.getActiveItem());

// const createLayer = new CreateLayer();

// const ow = new OpenWeb();
// ow.setBlendMonitoring();
// ow.setUrl(URLs.unsplash);
// ow.open();
// ow.setUrls([
//   "http://nasikusa.net/blend-monitoring",
// ]);
// ow.urls.push('https://www.youtube.com/watch?v=v0b7TUVz6lY');
// ow.open();

// const cw = new CreateWindow();

// const cf: CreateFolder = new CreateFolder();
// cf.make();

// const loadTemplate = new LoadTemplate();
// loadTemplate.load();

// const polyfill = new Polyfill();

// _.addAdj();

// var color = [1,1,1];
// var  name = "調整レイヤー";
// var n =  app.project.item(1).layers.addSolid(color,name,100,100,1,1);
// var comp = n.containingComp;
// n.outPoint = comp.duration;
// n.adjustmentLayer = true;
// n.source.width = comp.width;
// n.source.height = comp.height;
// n.source.pixelAspect = comp.pixelAspect;


// var color = [1,1,1];
// var  name = "調整レイヤー";
// app.project.item(1).addSolid(color,name,100,100,1,1);

// var proj = app.project;
// var comp = proj.items.addComp("name", 1920, 1080, 1.0, 30.0, 29.97);

// var distortionLayer = comp.layers.addSolid([0, 0, 0], 'Distortion', 1920, 1080, 1.0);

// const baseInfo = new BaseInfo();
// baseInfo.showData();

// const lf = new LoadFootage();

// var myComp = app.project.item(1);
// var mySolid = myComp.layers.addSolid([1.0,1.0,0], "my square", 50, 50, 1);

// var a = app.project.activeItem.selectedLayers;
// alert(a);

