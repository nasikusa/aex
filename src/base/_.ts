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
      const itemsArray: Item[] = _.Collection2Array(items);
      alert(itemsArray.length);
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
  static getActiveItem(): Item | null {
    const res = app.project.activeItem;
    return res;
  }

  static getSelectedItems(): Item[] | false {
    const selectedItem = app.project.selection;
    return selectedItem.length > 0 ? selectedItem : false;
  }

  static isItemSelected(): boolean {
    return _.getSelectedItems() ? true : false;
  }

  /**
   * 選択しているレイヤーをすべて取得する
   *
   * @todo selectedLayersの型定義、プロパティが無い？
   */
  static getSelectedLayers(): LayerCollection | boolean {
    const selectedLayers: LayerCollection =
      // @ts-ignore
      app.project.activeItem.selectedLayers;
    if (selectedLayers.length > 0) {
      return selectedLayers;
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
  static Collection2Array(inputCollection: ItemCollection): Item[] {
    const resultArray: Item[] = [];
    for (let i = 0; i < inputCollection.length; i++) {
      const item = inputCollection[i + 1];
      if (item != null) {
        resultArray[i] = item;
      }
    }
    return resultArray;
  }

  /**
   * プロジェクトを開く
   * @param name
   */
  static openProject(name: string) {
    const file = new File(name);
    if (file.exists) {
      const new_project = app.open(file);
      return new_project;
    }
  }

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
  static isWindow(): boolean {
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

  static getFrameRate(item: any = _.getActiveItem()) {
    return item.frameRate;
  }

  static changeCompDuration(
    duration,
    item: Item | null = _.getActiveItem()
  ): number | undefined {
    if (_.getType(item) === 'CompItem') {
      // @ts-ignore
      item.duration = duration;
      // @ts-ignore
      return item.duration;
    }
  }

  static getCompDuration(
    item: Item | null = _.getActiveItem()
  ): number | undefined {
    if (_.getType(item) === 'CompItem') {
      // @ts-ignore
      return item.duration;
    }
  }
}
