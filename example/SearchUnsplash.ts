import _ from "../src/base/_";
import OpenWeb from "../src/module/command/OpenWeb";
import {SeachUrls} from "../src/data/URLs";

const d = SeachUrls.unsplash;
let url = `${d.url}?${d.searchQuery}=manta`;

const openWeb = new OpenWeb();
openWeb.setUrl(url);
openWeb.open();

