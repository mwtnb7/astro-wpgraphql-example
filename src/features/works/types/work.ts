import type { Term } from '@features/works/types/term';

export interface Work {
  title: string;
  date: string;
  uri: string;
  terms: {
    nodes: Term[];
  };
  featuredImage: any;
}
