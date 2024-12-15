import { MessageContent, MessageInput } from '../../components';
import { images } from '../../assets/images';
import sharedStyles from '../../styles/layout/share.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(sharedStyles);

export default function ChattingRoomPage() {
  return (
    <div className={cx(sharedStyles.sharedLayout, 'room-wrapper')}>
      <div className={cx(sharedStyles.header, 'room-header')}>
        <img src={images.Previous} className={cx('previous')}></img>
        <div className={cx('profile')}>
          <img src={images.UserProfile} className={cx('profile-img')} />
          <p className={cx('friend-name')}>이선우</p>
        </div>
        <img src={images.Leave} className={cx('leave')}></img>
      </div>
      <div className={cx(sharedStyles.list)}>
        <MessageContent />
      </div>
      <div className={cx(sharedStyles.footer)}>
        <MessageInput />
      </div>
    </div>
  );
}
