import type Image from './image';

interface Media {
  data: {
    id: number;
    attributes: Image;
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
