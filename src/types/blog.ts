export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  readTime: number;
  coverImage?: string;
}

export interface BlogPostPreview {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
}
