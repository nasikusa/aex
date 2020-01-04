import 'extendscript-es5-shim-ts';
// import 'es5-shim';

// import Polyfill from './base/Polyfill';
// import BaseInfo from './base/BaseInfo'
import _ from './base/_';
import CallCommand from './module/command/CallCommand';
import OpenPath from './module/command/OpenPath';
import HistoryManager from './base/HistoryManager';

HistoryManager.start('example');

const openpath = new OpenPath();
openpath.setPath('/Users/toganomasahiro/Google ドライブ/idea/');
openpath.open();

HistoryManager.end();

// _.checkAccessToNetwork();

// const cc = new CallCommand();
// cc.setCommand('ls');
// const ret = cc.exec();
// if(typeof ret === 'string'){
//   alert(ret);
// }

// const res = CommandUtils.getDir('/Users/toganomasahiro/Documents/aex/src','D');
// if(typeof res === 'object'){
//   // alert(res[0]);
//   for(let val of res){
//     alert(val);
//   }
// }

// import CreateWindow from './UI/CreateWindow';
// import CreateFolder from './module/CreateFolder';
// import LoadTemplate from './module/LoadTemplate';
// import LoadFootage from './module/LoadFootage';
// import {URLs} from './data/URLs';
// import CallCommand from './module/command/CallCommand';
// import OpenPath from './module/command/OpenPath';
// import CreateLayer from './module/CreateLayer';
// import SetEffects from './module/SetEffects';
// import EF from './module/effect/EF';
// import OpenWebReference from "./module/command/OpenWebReference";
import Debug from './debug/Debug';
// import CommandUtils from './module/command/CommandUtils';
import FuzzyOpen from './module/command/FuzzyOpen';
// import FuzzySet from "fuzzyset.js";
// import "./lib/fuzzyset"

// const project = _.getProject();
// Debug.objectKeys(project, -1);

// const fuzzyOpen = new FuzzyOpen('D:/googledrive/material/cloth/','F',false,false);
// const fuzzyOpen = new FuzzyOpen('/Users/toganomasahiro/Google ドライブ/idea/unsplash', 'F', false, false);
// let result = fuzzyOpen.search('flower');
// alert(result[0]);

//   const openPath = new OpenPath();
//   // openPath.setPath(`${this.targetPath}/${String(matches)}`);
//   openPath.setPath(result[0][1]);
//   openPath.open();

// var myFolder = Folder.selectDialog ("Select a folder");
// alert(myFolder.fsName);
// alert(myFolder.name);
// Debug.objectKeys(myFolder);

// var fObj= new File(myFolder.fsName);
// var dlg = fObj.openDlg('ファイル選択');
// if (dlg != null) {
//     alert('OK');
// }else{
//     alert('cancel');
// }

// // var thisObject = globalThis || {};
// // var wnd = (thisObject instanceof Panel) ? thisObject : new Window("palette", "Dockable Script", undefined, {resizeable:true, closeButton: true});
// // if(wnd instanceof Panel){
//   const wnd = new Window("palette", "fuzzy search", [0,0,200,500], {resizeable:true, closeButton: true});
//   wnd.margins = 20;
//   //@ts-ignore
//   // var btA = wnd.add('button', { x: 0, y: 0, width: 130, height: 26 }, 'OK', { name: 'ok' });
//   // btA.onClick = function() {
//   //   alert('Pushed OK');
//   //   // wnd.close();
//   // };
//   // //@ts-ignore
//   // var btB = wnd.add('button', { x: 0, y: 30, width: 130, height: 26 }, 'Cancel', { name: 'cancel' });
//   // btB.onClick = function() {
//   //   alert('Pushed Cancel');
//   //   // wnd.close();
//   // };
//   // //@ts-ignore
//   // var btC = wnd.add('checkbox', {x:0, y:60, width: 130, height: 26}, 'checkbox1');
//   // rbA.value= true;
//   var st = wnd.add('statictext', {x:0,y:0,width:180,height:16}, '');
//   //@ts-ignore
//   var contentsGrp = wnd.add('group',undefined,'contentsGrp')
//   contentsGrp.orientation = 'column';
//   // st.text.fontsize = 24;
//   //@ts-ignore
//   var et = wnd.add('edittext',{x:0,y:16,width:180,height: 16}, 'search txt');
//   //@ts-ignore
// //   var rbA= wnd.add('radiobutton', {x:0,y:32,width:90,height: 16}, 'radiobutton A');
// //   //@ts-ignore
// //   var rbB= wnd.add('radiobutton', {x:90,y:32,width:90,height: 16}, 'radiobutton B');
// //   // et.text.fontsize = 24;

// //   var iconBtn = wnd.add('iconbutton',undefined,'C:/wptest/autorenew-white-18dp/1x/baseline_autorenew_white_18dp.png');
// //   //@ts-ignore
// //   var sld=wnd.add("Slider",{x:0,y:200,width:180,height: 16},"Slider");

// //   //@ts-ignore
// //   var lst=wnd.add("ListBox",undefined,"ListBox")
// //   //@ts-ignore
// //   var drpLst=wnd.add("DropDownList",undefined,"DropDownList")
// //   //@ts-ignore
// // var trv=wnd.add("TreeView",{x:0,y:100,width:180,height: 60},"TreeView")

// /*────────────
//     ListItemタイプ
//     上の３つのリストのUIの
//     選択肢のアイテムになるオブジェクトのクラスですが
//     ３つで有効なタイプが違います
//     基本の"item"タイプは３つ全部で有効ですが
//     境界線となる"separator"タイプは
//     DropDownListで
//     さらに入れ子でListItemを持てる"node"タイプは
//     TreeViewでのみ有効です
//     ────────────*/
// // lst.itms=new Array()
// // lst.itms.push(lst.add("item","ListItem(item)"))
// // lst.itms.push(lst.add("item","ListItem(item)"))
// // lst.itms.push(lst.add("item","ListItem(item)"))

// // drpLst.itms=new Array()
// // drpLst.itms.push(drpLst.add("item","ListItem(item)"))
// // drpLst.itms.push(drpLst.add("separator"))
// // drpLst.itms.push(drpLst.add("item","ListItem(item)"))
// // drpLst.itms.push(drpLst.add("item","ListItem(item)"))
// // drpLst.itms[0].selected=true

// // trv.itms=new Array()
// // trv.itms.push(trv.add("node","ListItem(node)"))
// // trv.items[0].add("item","ListItem(item)")
// // trv.items[0].add("item","ListItem(item)")
// // trv.items[0].add("item","ListItem(item)")
// // trv.itms.push(trv.add("node","ListItem(node)"))
// // trv.items[1].add("item","ListItem(item)")
// // trv.items[1].add("item","ListItem(item)")
// // trv.items[1].add("item","ListItem(item)")
// // trv.itms.push(trv.add("node","ListItem(node)"))
// // trv.items[2].add("item","ListItem(item)")
// // trv.items[2].add("item","ListItem(item)")
// // trv.items[2].add("item","ListItem(item)")
// // trv.itms.push(trv.add("node","ListItem(node)"))
// // trv.items[3].add("item","ListItem(item)")
// // trv.items[3].add("item","ListItem(item)")
// // trv.items[3].add("item","ListItem(item)")
// // trv.itms.push(trv.add("node","ListItem(node)"))
// // trv.items[4].add("item","ListItem(item)")
// // trv.items[4].add("item","ListItem(item)")
// // trv.items[4].add("item","ListItem(item)")
// // trv.itms.push(trv.add("node","ListItem(node)"))
// // trv.items[5].add("item","ListItem(item)")
// // trv.items[5].add("item","ListItem(item)")
// // trv.items[5].add("item","ListItem(item)")

//   et.onEnterKey = function(){
//     const fuzzy = new FuzzyOpen('D:/googledrive/material' , 'D' );
//     const result = fuzzy.search(et.text);
//     if(typeof result !== 'boolean'){
//       const openPath = new OpenPath(result[0][1]);
//       openPath.open();
//     }
//   }

//   et.onChanging = function(){
//     const fuzzy = new FuzzyOpen('D:/googledrive/material' , 'D' );
//     const result = fuzzy.search(et.text);
//     if(typeof result !== 'boolean'){
//       st.text = result[0][0];
//     }
//   }

//   // wnd.show();
//   // wnd.center();
//   //@ts-ignore
//   wnd.layout.layout(true);
// // }
