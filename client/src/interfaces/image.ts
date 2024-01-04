interface Format {
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: null | string;
  url: string;
}

export default interface Image {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail;
    small;
    medium;
    large: Format;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | any;
  created_at: string;
  updated_at: string;
}
