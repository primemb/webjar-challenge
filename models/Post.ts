export interface Post {
  previousPost: string | null;
  nextPost: string;
  introImageUrl: {
    host: string;
    path: string;
  };
  commentCount: number;
  isDeleted: boolean;
  _id: string;
  title: string;
  body: string;
  author: string;
  category: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}
