import { UserData } from '../UserData';

interface AppContent {
  path: string;
  type: string;
}

interface ProjectObject {
  renderRoot: string;
  baseRenderName: string;
  assetsFolders: AssetsFoldersObject[];
}

interface AssetsFoldersObject {
  name: string;
  isSequence: boolean;
  renderName: string;
  description: string;
}


/**
 *アプリケーションパスの保存用のオブジェクト
 */
export const AppPath: { [key: string]: AppContent } = {
  blender: {
    path: 'C:/Program Files/Blender Foundation/Blender 2.81/blender.exe',
    type: '3d',
  },
  blender279: {
    path: 'D:/googledrive/blender/blender-2.79b-windows64/blender.exe',
    type: '3d',
  },
  FotoSketcher: {
    path: 'C:/Program Files/FotoSketcher',
    type: 'image',
  },
  AfterFX: {
    path: 'C:/Program Files/Adobe After Effects 2020/Support Files/AfterFX.exe',
    type: 'script',
  },
  PhotoShop: {
    path: 'C:/Program Files/Adobe Photoshop 2020/Photoshop.exe',
    type: 'image',
  },
  MediaEncoder: {
    path: 'C:/Program Files/Adobe Media Encoder 2020/Adobe Media Encoder.exe',
    type: 'video',
  },
  PureRef: {
    path: 'C:/Program Files/PureRef/PureRef.exe',
    type: 'reference',
  },
  Evernote: {
    path: 'C:/Program Files (x86)/Evernote/Evernote/Evernote.exe',
    type: 'text',
  },
  ScreenToGif: {
    path: 'C:/Program Files (x86)/ScreenToGif/ScreenToGif.exe',
    type: 'video',
  },
  WizTree: {
    path: 'C:/Program Files (x86)/WizTree',
    type: 'utility',
  },
  AGDRec: {
    path: 'C:/software_normal/AGDRec_131F/AGDRec64.exe',
    type: 'video',
  },
  fSpy: {
    path: 'C:/software_normal/fSpy-1.0.3-win/fSpy.exe',
    type: '3d',
  },
  instanceMeshes: {
    path: 'C:/software_normal/instant-meshes-windows/Instant Meshes.exe',
    type: '3d',
  },
  MagicaVoxel: {
    path: 'C:/software_normal/MagicaVoxel 0.99/MagicaVoxel.exe',
    type: '3d',
  },
  SpaceSniffer: {
    path: 'C:/software_normal/spacesniffer_1_3_0_2/SpaceSniffer.exe',
    type: 'utility',
  },
};

/**
 *作品のプロジェクト用のオブジェクト配列
 */
export const ProjectPath: { [key: string]: ProjectObject } = {
  fish1: {
    renderRoot: 'D:/googledrive/render/fish1/',
    baseRenderName: 'Image0001.png',
    assetsFolders: [
      {
        name: 'solid',
        isSequence: true,
        renderName: '',
        description: '',
      },
      {
        name: 'shadow',
        isSequence: true,
        renderName: '',
        description: '',
      },
      {
        name: 'line',
        isSequence: true,
        renderName: '',
        description: '',
      },
    ],
  },
};
