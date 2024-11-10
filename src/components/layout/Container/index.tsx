import { joinClasses } from '@utils/joinClasses';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface Props {
  size?: 'sm' | undefined;
  classes?: string;
  children: ReactNode;
}

const Container: React.FC<Props> = ({ size, classes, children }) => {
  let classValue = classes || '';

  switch (size) {
    case 'sm':
      classValue = joinClasses(classValue, styles.containerSm);
      break;
    default:
      classValue = joinClasses(classValue, styles.containerDefault);
  }

  return <div className={joinClasses(classValue, styles.container)}>{children}</div>;
};

export default Container;
