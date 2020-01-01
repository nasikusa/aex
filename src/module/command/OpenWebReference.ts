import { SeachUrls } from '../../data/URLs';
// import _ from '../../base/_';
// import CallCommand from './CallCommand';
import OpenWeb from './OpenWeb';

export default class OpenWebReference extends OpenWeb {
  /**
   * 初期化時にURLが引数にあれば、それをそのままセットする。なければスルー。
   * @param inputUrl
   */
  constructor(inputUrl?: string | string[]) {
    super(inputUrl);
  }

  /**
   * リファレンス用のサイトをブラウザで開く
   * @param searchStr 検索したい文字
   * @todo 多言語化、UTF8対応、タイプごとの絞り込み、継承して別クラスにしたほうがいい？、Fileでsettingファイルを保存できると楽？（どこだけ開くとか）、サジェスチョン、URLエンコードするとgoogleで検索できなくなる
   */
  searchReference(searchStr: string): boolean {
    this.removeAllUrl();

    for (const key of Object.keys(SeachUrls)) {
      /**
       * 最終的に生成されるURL
       */
      let url = `${SeachUrls[key]['url']}`;

      /**
       * クエリ型か、URL型でURLを構成しているか
       */
      const searchType: string = SeachUrls[key]['searchType'];

      if (searchType === 'query') {
        const baseQuery: string = SeachUrls[key]['baseQuery'];
        const seachQuery: string = SeachUrls[key]['searchQuery'];

        url += '?';

        if (baseQuery) {
          url += `${baseQuery}&`;
        }
        url += `${seachQuery}=${searchStr}`;

        url = url.replace('&', '^&');
      } else if (searchType === 'url') {
        url += searchStr;
      }

      url = encodeURI(url);

      this.setUrl(url);
    }

    const isOpenSite = this.open();

    return isOpenSite;
  }
}
