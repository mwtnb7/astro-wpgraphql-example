import React from 'react';
import styles from './styles.module.css';

type Props = {
  classes?: string;
  style?: React.CSSProperties;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xlg' | undefined;
  vertical?: 'top' | 'bottom' | undefined;
  children: React.ReactNode;
};

const Section: React.FC<Props> = ({ classes, style, size, vertical, children }) => {
  let classValue = size ? styles[size] : '';

  if (vertical) {
    classValue += ` ${styles[vertical]}`;
  }

  if (classes) {
    classValue += ` ${classes}`;
  }

  return (
    <section className={classValue} style={style}>
      {children}
    </section>
  );
};

export default Section;
