import _ from "../../base/_";
// import OpenWeb from "../../module/command/OpenWeb";
import { SeachUrls } from "../../data/URLs";
import Aex from "../Aex.module";

const d = SeachUrls.unsplash;
let url = `${d.url}?${d.searchQuery}=manta`;

const openWeb = new Aex.OpenWeb();
openWeb.setUrl(url);
openWeb.open();
