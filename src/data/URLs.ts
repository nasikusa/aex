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
    seachType: "query",
    url: "https://www.google.com/search",
    baseQuery: "tbm=isch",
    searchQuery: "q",
    expectedLang: "all",
  },
  "youtube": {
    type: "video",
    seachType: "query",
    url: "https://www.youtube.com/results",
    baseQuery: "",
    searchQuery: "search_query",
    expectedLang: "all",
  },
  "vimeo": {
    type: "video",
    seachType: "query",
    url: "https://vimeo.com/search",
    baseQuery: "",
    searchQuery: "q",
    expectedLang: "english",
  },
  "sketchfab": {
    type: "3d",
    seachType: "query",
    url: "https://sketchfab.com/search",
    baseQuery: "",
    searchQuery: "q",
    expectedLang: "",
  },
  "unsplash": {
    type: "image",
    seachType: "url",
    url: "https://unsplash.com/s/photos/",
    expectedLang: "",
  },
};