import React from 'react';
import styles from './styles.module.css';

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return <input type={type} className={styles.input} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
