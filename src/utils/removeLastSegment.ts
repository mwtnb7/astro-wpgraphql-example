// URLから最後のスラッシュ以降を削除する関数
export const removeLastSegment = (uri: string | undefined): string => {
  if (uri === undefined) {
    return '';
  }
  return uri.toString().replace(/\/[^/]*$/, '');
};
