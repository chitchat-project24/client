import { Header, List } from '../../components';
import styles from './ProfileListPage.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

export default function ProfileListPage() {
  return (
    <div>
      <Header pageType="user" />
      <List pageType="user" />
    </div>
  );
}
