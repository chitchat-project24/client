import { useState } from 'react';
import { User, Message } from '../../types';
import { images } from '../../assets/images';
import styles from './ListItem.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

interface ListItemProps {
  user: User | Message;
  pageType: 'user' | 'message';
  showGoChat?: boolean;
  showMore?: boolean;
}

export default function ListItem({
  user,
  pageType,
  showGoChat,
  showMore,
}: ListItemProps) {
  const [showLeaveBtn, setShowLeaveBtn] = useState<boolean>(false);

  return (
    <div className={cx('list')}>
      <img src={images.UserProfile} className={cx('profile')} alt="Profile" />
      <div className={cx('text-container')}>
        <p className={cx('nickname')}>{user.nickname}</p>
        {pageType === 'user' ? (
          <p className={cx('message')}>{(user as User).message}</p>
        ) : (
          <p className={cx('content')}>{(user as Message).content}</p>
        )}
      </div>
      {pageType === 'user' ? (
        showGoChat && <img src={images.GoChat} className={cx('go-chat')} />
      ) : (
        <>
          <div className={cx('detail-container')}>
            <p className={cx('time')}>{(user as Message).time}</p>
            {(user as Message).unreadCnt ? (
              <p
                className={cx('unread', {
                  large: (user as Message).unreadCnt > 99,
                })}
              >
                {(user as Message).unreadCnt > 99
                  ? '99+'
                  : (user as Message).unreadCnt}
              </p>
            ) : (
              <></>
            )}
          </div>
          {showMore && (
            <img
              src={images.More}
              className={cx('more')}
              onClick={() => setShowLeaveBtn(true)}
            />
          )}
          {showLeaveBtn && (
            <div className={cx('leave')}>
              <button className={cx('leaveBtn')}>채팅방 나가기</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
