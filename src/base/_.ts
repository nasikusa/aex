import Utils from './Utils';
import Debug from '../debug/Debug';

/**
 *便利関数をあつめたベースとなるクラス
 *
 * @export
 * @class _
 * @extends {Utils}
 */
export default class _ extends Utils {
  /**
   * プロジェクトを取得する
   */
  static getProject(): Project | null {
    return app.project;
  }
  /**
   * プロジェクトのアイテムをすべて取得する
   */
  static getItems(): ItemCollection | null {
    return app.project.items;
  }

  /**
   *コンポジションを取得する関数
   *
   * @static
   * @param {string} [searchCompName] 省略可能。探したいコンポジション名を入れる。ない場合はすべてのコンポジションを返す。
   * @returns {(CompItem[] | boolean)} コンポジションが存在すればコンポジションを、なければfalseを返す
   * @memberof _
   */
  static getComps(searchCompName?: string): CompItem[] | boolean {
    const items: ItemCollection | null = _.getItems();
    const compsArray: CompItem[] = [];
    if (items != null && items.length > 0) {
      const itemsArray: Item[] = _.ItemCollection2Array(items);
      for (const item of itemsArray) {
        if (item instanceof CompItem) {
          if (searchCompName) {
            if (item.name === searchCompName) {
              compsArray.push(item);
            }
            continue;
          }
          compsArray.push(item);
        }
      }
      if (compsArray.length > 0) {
        return compsArray;
      }
      return false;
    }
    return false;
  }

  /**
   * アクティブなプロジェクトのアイテムを取得する
   */
  static getActiveItem(): Item | boolean {
    const res: Item  | null= app.project.activeItem;
    return res ? res : false;
  }

  /**
   *選択されているプロジェクトアイテムを取得する
   *
   * @static
   * @returns {(Item[] | false)}
   * @memberof _
   */
  static getSelectedItems(isReturnAsArray: boolean = false): Item[] | false {
    const selectedItem: Item[] = app.project.selection;
    return selectedItem.length > 0 ? selectedItem : false;
  }

  /**
   *プロジェクトアイテムが選択されているかを返す
   *
   * @static
   * @returns {boolean}
   * @memberof _
   */
  static isItemSelected(): boolean {
    return _.getSelectedItems() ? true : false;
  }

  /**
   * 選択しているレイヤーをすべて取得する
   *
   * @todo selectedLayersの型定義、プロパティが無い？
   */
  static getSelectedLayers( returnAsArray: boolean = false ): LayerCollection | Layer[] | boolean {
    const selectedLayers: LayerCollection =
      // @ts-ignore
      app.project.activeItem.selectedLayers;
    if (selectedLayers.length > 0) {
      if( returnAsArray ){
        const returnedArray = _.LayerCollection2Array(selectedLayers);
        return returnedArray;
      }else{
        return selectedLayers;
      }
    } else {
      return false;
    }
  }

  /**
   *レイヤーが選択されているかどうかを判定する
   *
   * @static
   * @returns {boolean}
   * @memberof _
   */
  static isLayerSelected(): boolean {
    return _.getSelectedLayers() ? true : false;
  }

  static getSelectedProps() {
    // @ts-ignore
    return _.getSelectedLayers().selectedProperties;
  }

  /**
   * アクティブなコンポジションのレイヤーをすべて取得する
   */
  static getActiveItemLayers(): LayerCollection | undefined {
    // @ts-ignore
    return app.project.activeItem.layers;
  }

  static getContianer(item: CompItem) {
    // @ts-ignore
    return item.containingComp;
  }

  /**
   *ItemCollectionをArrayに変換する関数
   *
   * @static
   * @param {ItemCollection} inputCollection
   * @returns {Item[]}
   * @memberof Utils
   */
  static Collection2Array(inputCollection: ItemCollection | LayerCollection): Item[] | Layer[] {
    const resultArray: Item[] | Layer[] = [];
    for (let i = 0; i < inputCollection.length; i++) {
      const item = inputCollection[i];
      if (item != null) {
        resultArray[i] = item;
      }
    }
    return resultArray;
  }

  static ItemCollection2Array(inputCollection: ItemCollection): Item[]{
    const returnedArray = _.Collection2Array(inputCollection);
    const resultArray: Item[] = [];
    for( const item of returnedArray ){
      if( item instanceof Item ){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

  /**
   *
   *
   * @static
   * @param {LayerCollection} inputCollection
   * @returns {Layer[]}
   * @memberof _
   * @todo 動いていない
   */
  static LayerCollection2Array(inputCollection: LayerCollection): Layer[]{
    const returnedArray = _.Collection2Array(inputCollection);
    const resultArray: Layer[] = [];
    for( const item of returnedArray ){

      alert(`is instanceof compItem ${item instanceof CompItem}`);
      if( item instanceof Layer ){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

  /**
   * プロジェクトを開く
   * @param name
   */
  static openProject(name: string): Project | boolean {
    const file = new File(name);
    if (file.exists && file != null) {
      const new_project: Project | null = app.open(file);
      if( new_project != null ){
        return new_project;
      }else{
        return false;
      }
    }
    return false;
  }

  // temp
  static addAdjustmentLayer() {
    var color = [1, 1, 1];
    var name = '調整レイヤー';
    // @ts-ignore
    var n = app.project.item(1).layers.addSolid(color, name, 100, 100, 1, 1);
    var comp = n.containingComp;
    n.outPoint = comp.duration;
    n.adjustmentLayer = true;
    n.source.width = comp.width;
    n.source.height = comp.height;
    n.source.pixelAspect = comp.pixelAspect;
    return n;
  }

  static getCompInfo(comp: CompItem): { [key: string]: string } {
    const infoObject: any = {};
    infoObject.duration = comp.duration;
    infoObject.width = comp.width;
    infoObject.height = comp.height;
    infoObject.pixelAspect = comp.pixelAspect;

    return infoObject;
  }

  /**
   *OSがwindowsであるかどうか
   *
   * @static
   * @returns {boolean}
   * @memberof _
   */
  static isWindows(): boolean {
    return Number($.os.toLowerCase().indexOf('windows')) !== -1;
  }

  /**
   *OSがmacであるかどうか
   *
   * @static
   * @returns {boolean}
   * @memberof _
   * @todo macで実際に検証
   */
  static isMac(): boolean {
    return Number($.os.toLowerCase().indexOf('windows')) === -1;
  }

  static changeFrameRate(
    framerate: number,
    item: any = _.getActiveItem()
  ): number {
    item.frameRate = framerate;
    return item.frameRate;
  }

  /**
   *アイテムのフレームレートを取得する。何も指定していなければアクティブのコンポジションのフレームレートを取得する。
   *
   * @static
   * @param {(boolean | Item)} [item=_.getActiveItem()]
   * @returns {(boolean | number)}
   * @memberof _
   */
  static getFrameRate(item: boolean | Item = _.getActiveItem()): boolean | number {
    if (item instanceof CompItem) {
      return item.frameRate;
    }
    return false;
  }

  static changeCompDuration(
    duration,
    item: Item | boolean = _.getActiveItem()
  ): number | undefined {
    if (_.getType(item) === 'CompItem') {
      // @ts-ignore
      item.duration = duration;
      // @ts-ignore
      return item.duration;
    }
  }

  static getCompDuration(
    item: Item | boolean = _.getActiveItem()
  ): number | undefined {
    if (_.getType(item) === 'CompItem') {
      // @ts-ignore
      return item.duration;
    }
  }

  /**
   *スクリプトにネットワークとファイルへのアクセスができるかどうかを返す
   *
   * @returns {boolean}
   * @memberof _
   */
  static hasPermissionToNetworkAccess(): boolean{
    return app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY") === 1;
  }

  /**
   *hasPermissionToNetworkAccess関数の省略形
   *
   * @returns {boolean}
   * @memberof _
   */
  static hasAccessScript(): boolean{
    return _.hasPermissionToNetworkAccess();
  }

  /**
   *
   *
   * @static
   * @returns {boolean}
   * @memberof _
   */
  static checkAccessToNetwork(): boolean{
    if(_.hasPermissionToNetworkAccess()){
      alert('このスクリプトを動かすためには設定画面で「スクリプトによるファイルの書き込みとネットワークへのアクセスを許可」を有効にする必要があります。');
      return false;
    }
    return true;
  }

  /**
   *設定画面を開く関数
   *
   * @static
   * @memberof _
   */
  static openSettingsPanel(): void {
    app.executeCommand(2359);
  }

  
}
