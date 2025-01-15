import styles from './LoginButton.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

interface LoginButtonProps {
  text: string;
}

export default function LoginButton({ text }: LoginButtonProps) {
  return <button>{text}</button>;
}
