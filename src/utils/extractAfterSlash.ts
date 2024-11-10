export const extractAfterSlash = (uri: string | undefined, index: number): string | null => {
  if (!uri) {
    return null;
  }
  const sections = uri.split('/');

  // インデックスは配列の範囲内でなければならない
  // 通常のURLでは最初のセクションは空文字（'/'の前）なので、実質的なセクションはindex+1から始まる
  if (index < 0 || index >= sections.length - 1) {
    return null;
  }
  return sections[index + 1];
};
