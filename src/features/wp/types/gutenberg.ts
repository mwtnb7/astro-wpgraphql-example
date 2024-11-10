export type Block = {
  name?: string;
  attributes?: {
    [key: string]: any;
  };
  innerBlocks?: Block[];
};
export type StyleOptions = {
  styleFormat: 'string' | 'object';
};
