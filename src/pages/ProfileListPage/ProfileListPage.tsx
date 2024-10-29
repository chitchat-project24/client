import { NavBar } from '../../components';
import styles from './ProfileList.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

export default function ProfileListPage() {
  return (
    <div className={cx('wrapper')}>
      <NavBar />
    </div>
  );
}
