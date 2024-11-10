// クラス名を連結する関数
export const joinClasses = (...classes: string[]) => classes.filter((c) => !!c).join(' ');
