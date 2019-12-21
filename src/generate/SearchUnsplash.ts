import _ from "../base/_";
import OpenWeb from "../module/command/OpenWeb";
import {SeachUrls} from "../data/URLs";

const d = SeachUrls.unsplash;
let url = `${d.url}?${d.searchQuery}=manta`;

const openWeb = new OpenWeb();
openWeb.setUrl(url);
openWeb.open();

