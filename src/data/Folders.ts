interface FolderContent {
  path: string;
  type: string;
}

export const Folders: { [key: string]: FolderContent } = {
  materialWater: {
    path: 'D:/googledrive/material/water_color/',
    type: 'asset',
  },
  material: {
    path: 'D:/googledrive/material/',
    type: 'asset',
  },
  mateiralGradation: {
    path: 'D:/googledrive/material/gradation/',
    type: 'asset',
  },
  render: {
    path: 'D:/googledrive/render/',
    type: 'render',
  },
  idea: {
    path: 'D:/googledrive/idea/',
    type: 'idea',
  },
  project: {
    path: 'D:/googledrive/works/',
    type: 'project',
  },
};
