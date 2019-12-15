interface SeachUrlsContent {
  type: string;
  searchType: string;
  url: string;
  baseQuery: string;
  searchQuery: string;
  expectedLang: string;
};

export const URLs = {
  "blend": "http://nasikusa.net/blend-monitoring",
  "colorSelector": "http://nasikusa.net/practice/p39.html",
  "unsplash": "https://unsplash.com/",
  "pixabay": "https://pixabay.com/ja/",
  "twitter": "https://twitter.com/",
  "aex": "https://github.com/nasikusa/aex",
  "googleDrive": "https://drive.google.com/drive/my-drive",
};

export const SeachUrls: {[key: string]: SeachUrlsContent} = {
  "googleImage": {
    type: 'image',
    searchType: "query",
    url: "https://www.google.com/search",
    baseQuery: "tbm=isch",
    searchQuery: "q",
    expectedLang: "all",
  },
  "youtube": {
    type: "video",
    searchType: "query",
    url: "https://www.youtube.com/results",
    baseQuery: "",
    searchQuery: "search_query",
    expectedLang: "all",
  },
  "vimeo": {
    type: "video",
    searchType: "query",
    url: "https://vimeo.com/search",
    baseQuery: "",
    searchQuery: "q",
    expectedLang: "english",
  },
  "sketchfab": {
    type: "3d",
    searchType: "query",
    url: "https://sketchfab.com/search",
    baseQuery: "",
    searchQuery: "q",
    expectedLang: "english",
  },
  "unsplash": {
    type: "image",
    searchType: "url",
    url: "https://unsplash.com/s/photos/",
    baseQuery: "",
    searchQuery: "",
    expectedLang: "english",
  },
  "PAKUTASO": {
    type: "image",
    searchType: "query",
    url: "https://www.pakutaso.com/search.html",
    baseQuery: "offset=0&limit=20",
    searchQuery: "search",
    expectedLang: "japanese",
  }
};