import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Route';
import { User, Chat } from '../../types';
import { images } from '../../assets/images';
import styles from './ListItem.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

interface ListItemProps {
  user: User | Chat;
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
  const navigate = useNavigate();
  const [showLeaveBtn, setShowLeaveBtn] = useState<boolean>(false);

  const linkToRoom = (id: string) => {
    navigate(`${ROUTE.CHATTING_ROOM_PAGE.link}/${id}`);
  };

  return (
    <div className={cx('list')} onClick={() => linkToRoom('123')}>
      <img src={images.UserProfile} className={cx('profile')} alt="Profile" />
      <div className={cx('text-container')}>
        <p className={cx('nickname')}>{user.nickname}</p>
        {pageType === 'user' ? (
          <p className={cx('message')}>{(user as User).message}</p>
        ) : (
          <p className={cx('content')}>{(user as Chat).content}</p>
        )}
      </div>
      {pageType === 'user' ? (
        showGoChat && <img src={images.GoChat} className={cx('go-chat')} />
      ) : (
        <>
          <div className={cx('detail-container')}>
            <p className={cx('time')}>{(user as Chat).time}</p>
            {(user as Chat).unreadCnt ? (
              <p
                className={cx('unread', {
                  large: (user as Chat).unreadCnt > 99,
                })}
              >
                {(user as Chat).unreadCnt > 99
                  ? '99+'
                  : (user as Chat).unreadCnt}
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
