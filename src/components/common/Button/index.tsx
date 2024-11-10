import styles from './styles.module.css';

interface Props {
  label: string;
  href?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
  onClick?: () => void;
}

const Button = ({ label, href, size = 'md', onClick }: Props) => {
  const Element = href ? 'a' : 'button';
  return (
    <Element className={`${styles.button} ${styles[size]}`} href={href} onClick={onClick}>
      {label}
    </Element>
  );
};

export default Button;
