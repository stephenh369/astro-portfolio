interface Media {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          path: null | string;
          url: string;
        };
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
    };
  };
}

export default interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    thumbnail: Media;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
