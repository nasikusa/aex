interface URLsContent {
  readonly url: string
}

interface SeachUrlsContent extends URLsContent {
  readonly type: 'image' | '3d' | 'video'
  readonly searchType: 'url' | 'query'
  readonly baseQuery: string
  readonly searchQuery: string
  readonly expectedLang: string
}

/**
 * URL保存用のオブジェクト
 * @todo 役割が曖昧なので解消したい
 */
export const URLs: {
  [key: string]: URLsContent
} = {
  'blend-monitoring': {
    url: 'http://nasikusa.net/blend-monitoring'
  },
  colorSelector: {
    url: 'http://nasikusa.net/practice/p39.html'
  }
}

/**
 * リファレンス検索用のURLおよび、その他の情報を貯蓄しておく配列
 * @todo sketchfabのダウンロード可能などのその他のクエリへの対応
 */
export const SeachUrls: {
  [key: string]: SeachUrlsContent
} = {
  googleImage: {
    type: 'image',
    searchType: 'query',
    url: 'https://www.google.com/search',
    baseQuery: 'tbm=isch',
    searchQuery: 'q',
    expectedLang: 'all'
  },
  youtube: {
    type: 'video',
    searchType: 'query',
    url: 'https://www.youtube.com/results',
    baseQuery: '',
    searchQuery: 'search_query',
    expectedLang: 'all'
  },
  vimeo: {
    type: 'video',
    searchType: 'query',
    url: 'https://vimeo.com/search',
    baseQuery: '',
    searchQuery: 'q',
    expectedLang: 'english'
  },
  sketchfab: {
    type: '3d',
    searchType: 'query',
    url: 'https://sketchfab.com/search',
    baseQuery: '',
    searchQuery: 'q',
    expectedLang: 'english'
  },
  unsplash: {
    type: 'image',
    searchType: 'url',
    url: 'https://unsplash.com/s/photos/',
    baseQuery: '',
    searchQuery: '',
    expectedLang: 'english'
  },
  PAKUTASO: {
    type: 'image',
    searchType: 'query',
    url: 'https://www.pakutaso.com/search.html',
    baseQuery: 'offset=0&limit=20',
    searchQuery: 'search',
    expectedLang: 'japanese'
  }
}

export const MusicURLs: {
  [key: string]: URLsContent
} = {}
