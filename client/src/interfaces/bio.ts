import type Image from "./image";

export default interface Bio {
  id: number;
  attributes: {
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    content_blocks: [
      {
        type: string;
        children: [{ type: string; text: string }];
        image?: Image;
      }
    ];
  };
}
