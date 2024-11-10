import React, { useState } from 'react';
import styles from './styles.module.css';

interface Props {
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<Props> = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    console.log('handleToggle');
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={handleToggle}>
        <h3>{title}</h3>
        <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className={styles.content}>{content}</div>}
    </div>
  );
};

export default Accordion;
