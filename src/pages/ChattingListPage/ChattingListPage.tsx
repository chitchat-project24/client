import { Header, List, Footer } from '../../components';
import sharedStyles from '../../styles/layout/share.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(sharedStyles);

export default function ChattingListPage() {
  return (
    <div className={cx(sharedStyles.sharedLayout)}>
      <div className={cx(sharedStyles.header)}>
        <Header pageType="message" />
      </div>
      <div className={cx(sharedStyles.list)}>
        <List pageType="message" />
      </div>
      <div className={cx(sharedStyles.footer)}>
        <Footer />
      </div>
    </div>
  );
}
