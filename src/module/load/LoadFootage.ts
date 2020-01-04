import _ from '../../base/_';
import { ProjectPath } from '../../data/Paths';

export default class LoadFootage {
  public options: ImportOptions[] = [];

  constructor() {}

  /**
   * ロードするファイルを設定します。
   * @param path ファイルのパス
   * @param isSequence 連番ファイルであるかどうか
   */
  setItem(path: string, isSequence = false): void {
    const option = new ImportOptions();
    option.file = new File(path);
    if (isSequence) {
      option.sequence = true;
    }
    this.options.push(option);
  }

  /**
   * プロジェクトの名前から連番画像を取得します
   * @param projectName プロジェクトの名前
   */
  setSequenceByProject(projectName: string): boolean {
    const projectData = ProjectPath[projectName];
    if (!projectData) return false;
    const folders = projectData.assetsFolders;
    const fileName = projectData.baseRenderName;
    const FolderNamesArray = folders.map(function(val) {
      return val.name;
    });

    this.setSequenceByFolder(projectData.renderRoot, FolderNamesArray, fileName);

    return true;
  }

  /**
   * 連番画像を取得する
   * @param basePath ベースとなるパス
   * @param folders 取得したい連番画像のあるフォルダ
   * @param baseRenderName 連番画像のファイル名（１つのみ）
   */
  setSequenceByFolder(basePath: string, folders: string[], baseRenderName: string) {
    for (const folder of folders) {
      let path = '';
      path += basePath;
      path += `${folder}/${baseRenderName}`;
      this.setItem(path, true);
    }
  }

  /**
   * すべてのファイル設定を削除します
   */
  removeAllItem() {
    this.options = [];
  }

  load() {
    for (const option of this.options) {
      app.project.importFile(option);
    }
  }
}
