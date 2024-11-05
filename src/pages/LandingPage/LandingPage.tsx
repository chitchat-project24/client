import { useEffect } from 'react';
import { ROUTE } from '../../routes/Route';
import { images } from '../../assets/images';
import styles from './LandingPage.module.scss';
import cs from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
const cx = cs.bind(styles);

export default function LandingPage() {
  const navigate = useNavigate();

  // 임의로 로그인 페이지로 이동하도록 설정함
  // 추후 로그인 상태를 확인하고 /login, /profilelist 중 선택하는 코드 추가
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTE.LOGIN_PAGE.link);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <img src={images.Logo} />
      </div>
      <div className={cx('shadow')}></div>
    </div>
  );
}
