import type { HTMLTag } from 'astro/types';
import React from 'react';
import styles from './styles.module.css';

interface Props {
  classes?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg';
  content?: string;
  children?: React.ReactNode;
}

const Heading = ({ level, size, classes, content, children }: Props) => {
  const Element: HTMLTag = `h${level}` as HTMLTag;

  return (
    <Element className={`${styles.heading} ${size ? styles[size] : ''} ${classes}`}>
      {content && <span dangerouslySetInnerHTML={{ __html: content }} />}
      {children}
    </Element>
  );
};

export default Heading;
