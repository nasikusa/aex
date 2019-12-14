export const URLs = {
  "blend": "http://nasikusa.net/blend-monitoring",
  "colorSelector": "http://nasikusa.net/practice/p39.html",
  "unsplash": "https://unsplash.com/",
  "pixabay": "https://pixabay.com/ja/",
  "twitter": "https://twitter.com/",
  "aex": "https://github.com/nasikusa/aex",
  "googleDrive": "https://drive.google.com/drive/my-drive",
  "googleImage": "https://www.google.com/search?hl=ja&tbm=isch", // &q=xxx でキーワード検索
};

export const SeachUrls = {
  "googleImage": {
    type: 'image',
    url: "https://www.google.com/search?hl=ja&tbm=isch&q=",
    baseQuery: "",
    searchQuery: "q",
    expectedLang: "all",
  },
  "youtube": {
    type: "video",
    url: "https://www.youtube.com/results?search_query",
    baseQuery: "",
    searchQuery: "search_query",
    expectedLang: "all",
  },
  "sketchfab": {
    type: "3d",
    url: "",
    baseQuery: "",
    searchQuery: "",
  },
};