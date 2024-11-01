import { Header, List } from '../../components';
import styles from './ChattingListPage.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

export default function ChattingListPage() {
  return (
    <div>
      <Header pageType="message" />
      <List pageType="message" />
    </div>
  );
}
