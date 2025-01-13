import { Header, List, Footer } from '../../components';
import sharedStyles from '../../styles/layout/chat-features-share.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(sharedStyles);

export default function ProfileListPage() {
  return (
    <div className={cx(sharedStyles.sharedLayout)}>
      <div className={cx(sharedStyles.header)}>
        <Header pageType="user" />
      </div>
      <div className={cx(sharedStyles.list)}>
        <List pageType="user" />
      </div>
      <div className={cx(sharedStyles.footer)}>
        <Footer />
      </div>
    </div>
  );
}
