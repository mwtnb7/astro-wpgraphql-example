import type { Block } from '../types/gutenberg';

// 関数オーバーロードの宣言
declare function getBlockStyling(
  block: Block,
  config: {
    styleFormat: 'string';
    [key: string]: any;
  }
): {
  styles: string;
  classes: string;
};
declare function getBlockStyling(
  block: Block,
  config: {
    styleFormat: 'object';
    [key: string]: any;
  }
): {
  styles: {
    [key: string]: string;
  };
  classes: string;
};
declare function getBlockStyling(block: Block): {
  styles: string;
  classes: string;
};

// 関数の実装
function getBlockStyling(
  block: Block,
  config?: { styleFormat?: 'string' | 'object'; [key: string]: any }
): { styles: any; classes: string } {
  const defaultStyles = {
    fontSize: '16px',
    color: '#000'
  };
  const defaultClasses = 'default-class';

  if (!config) {
    return {
      styles: Object.entries(defaultStyles)
        .map(([key, value]) => `${key}: ${value}`)
        .join('; '),
      classes: defaultClasses
    };
  }

  if (config.styleFormat === 'object') {
    return {
      styles: defaultStyles,
      classes: defaultClasses
    };
  }

  return {
    styles: Object.entries(defaultStyles)
      .map(([key, value]) => `${key}: ${value}`)
      .join('; '),
    classes: defaultClasses
  };
}

export default getBlockStyling;
