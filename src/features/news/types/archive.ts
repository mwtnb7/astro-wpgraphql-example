import type { Post } from './post';

export interface PaginationUrl {
  current: string;
  next?: string;
  prev?: string;
}

export interface PaginationData {
  data: Post[];
  start: number;
  end: number;
  size: number;
  total: number;
  currentPage: number;
  lastPage: number;
  url: PaginationUrl;
}
