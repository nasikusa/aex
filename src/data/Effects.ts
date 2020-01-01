/**
 *Effectsオブジェクトの中にある、オブジェクトの定義
 *
 * @interface EffectsContent
 */
export interface EffectsContent {
  q: string;
  en: string;
  ja: string;
  match: string;
  type?: string;
  props?: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

/**
 * エフェクト検索用のタイプを選択するためのstring型たち
 */
export type EffectsSearchContent = 'q' | 'en' | 'ja' | 'match';

/**
 * エフェクトオブジェクト。現在は自分がよく使うエフェクトのみ。
 * キーに関しては xxx_yyy
 *  xxx -> エフェクトのグループの名前 3文字
 *  yyy -> エフェクト名の短縮したもの _で区切り。
 *
 * @todo エフェクトのプロパティの扱い。ファイル容量が重くならないように配慮する必要あり。
 */
export const Effects: { [key: string]: EffectsContent } = {
  blu_gauss_blur: {
    q: 'gb',
    en: 'Gaussian Blur',
    ja: 'ブラー(ガウス)',
    match: 'ADBE Gaussian Blur',
    type: 'blur',
  },
  cha_minmax: {
    q: 'mm',
    en: 'Minimax',
    ja: '最大/最小',
    match: 'ADBE Minimax',
  },
  tim_pos_time: {
    q: 'pt',
    en: 'Posterize Time',
    ja: 'ポスタリゼーション時間',
    match: 'ADBE Posterize Time',
  },
  col_level: {
    q: 'l',
    en: 'Levels',
    ja: 'レベル',
    match: 'ADBE Easy Levels2',
  },
  col_len_filter: {
    q: 'lf',
    en: 'Photo Filter',
    ja: 'レンズフィルタ',
    match: 'ADBE Photo Filter',
  },
  'col_b&c': {
    q: 'bc',
    en: 'Brightness & Contrast',
    ja: '輝度＆コントラスト',
    match: 'ADBE Brightness & Contrast 2',
  },
  'col_h/s': {
    q: 'hs',
    en: 'Hue/Saturation',
    ja: '色相/彩度',
    match: 'ADBE HUE SATURATION',
  },
  gen_paint: {
    q: 'p',
    en: 'Paint Bucket',
    ja: '塗りつぶし',
    match: 'ADBE Paint Bucket',
  },
  cha_rem_c_mat: {
    q: 'rcm',
    en: 'Remove Color Matting',
    ja: 'カラーマット削除',
    match: 'ADBE Remove Color Matting',
  },
  cha_combine: {
    q: 'cc',
    en: 'Channel Combiner',
    ja: 'チャンネルコンバイナー',
    match: 'ADBE Channel Combiner',
    type: 'channel',
    props: {
      source: { q: 's', en: '', ja: 'ソースオプション', match: 'ADBE Channel Combiner-0001' },
      second: { q: 'sl', en: '', ja: '2つめのレイヤーを使用', match: 'ADBE Channel Combiner-0002' },
      layer1: { q: 'l1', en: '', ja: 'ソースレイヤー', match: 'ADBE Channel Combiner-0003' },
      layer2: { q: 'l2', en: '', ja: 'ソースレイヤー', match: 'ADBE Channel Combiner-0004' },
      changeOption: { q: 'cho', en: '', ja: '変更オプション', match: 'ADBE Channel Combiner-0005' },
      target: { q: 't', en: '', ja: 'ターゲット', match: 'ADBE Channel Combiner-0006' },
      invert: { q: 'i', en: '', ja: '反転', match: 'ADBE Channel Combiner-0007' },
      alpha: { q: 'a', en: '', ja: '不透明アルファ', match: 'ADBE Channel Combiner-0008' },
      compOption: { q: 'cop', en: '', ja: 'コンポジットオプション', match: '	ADBE Effect Built In Params' },
      mask: { q: 'm', en: '', ja: 'マスク', match: '	ADBE Effect Mask Parade' },
      opacity: { q: 'o', en: '', ja: 'エフェクトの不透明度', match: 'ADBE Effect Mask Opacity' },
    },
  },
  dis_transform: {
    q: 't',
    en: 'Transform',
    ja: 'トランスフォーム',
    match: 'ADBE Geometry2',
  },
  col_cha_mix: {
    q: 'cm',
    en: 'Channel Mixer',
    ja: 'チャンネルミキサー',
    match: 'ADBE CHANNEL MIXER',
    type: 'color',
  },
  col_balance: {
    q: 'cb',
    en: 'Color Balance',
    ja: 'カラーバランス',
    match: 'ADBE Color Balance 2',
  },
  col_level_i: {
    q: 'li',
    en: 'Levels (Individual Controls)',
    ja: '	レベル (個々の制御)',
    match: 'ADBE Pro Levels2',
  },
  gen_fill: {
    q: 'f',
    en: 'Fill',
    ja: '塗り',
    match: 'ADBE Fill',
  },
  col_sel: {
    q: 'cs',
    en: 'Selective Color',
    ja: '特定色域の選択',
    match: 'ADBE SelectiveColor',
  },
  cha_inv: {
    q: 'i',
    en: 'Invert',
    ja: '反転',
    match: 'ADBE Invert',
  },
  exp_angle: {
    q: 'ea',
    en: 'Angle Control',
    ja: '角度制御',
    match: 'ADBE Angle Control',
  },
  exp_check: {
    q: 'ech',
    en: 'Checkbox Control',
    ja: 'チェックボックス制御',
    match: 'ADBE Checkbox Control',
  },
  exp_col: {
    q: 'eco',
    en: 'Color Control',
    ja: 'カラー制御',
    match: 'ADBE Color Control',
  },
  exp_layer: {
    q: 'el',
    en: 'Layer Control',
    ja: 'レイヤー制御',
    match: 'ADBE Layer Control',
  },
  exp_point: {
    q: 'ep',
    en: 'Point Control',
    ja: 'ポイント制御',
    match: 'ADBE Point Control',
  },
  exp_slider: {
    q: 'es',
    en: 'Slider Control',
    ja: 'スライダー制御',
    match: 'ADBE Slider Control',
  },
};
// "": {
//   en: "",
//   ja: "",
//   match: "",
// },
