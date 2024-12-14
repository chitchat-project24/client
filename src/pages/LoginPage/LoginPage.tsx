import styles from './LoginPage.module.scss';
import cs from 'classnames/bind';
import { images } from '../../assets/images';
import { UserFormInput, LoginButton } from '../../components/index';
const cx = cs.bind(styles);

export default function LoginPage() {
  return (
    <div className={cx('login-container')}>
      <div className={cx('logo')}>
        <img src={images.Logo} />
      </div>
      <div className={cx('input-section')}>
        <UserFormInput type="id" />
        <UserFormInput type="password" />
      </div>
      <div className={cx('button-section')}>
        <LoginButton text="로그인" />
        <div className={cx('links')}>
          <a>비밀번호 찾기</a>
          <a>회원가입</a>
        </div>
      </div>
    </div>
  );
}
