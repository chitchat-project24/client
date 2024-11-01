import data from '../../data/profile.json';
import { images } from '../../assets/images';
import styles from './List.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

// 임시 타입 지정
interface UserType {
  nickname: string;
  message: string;
}

interface ListItemProps {
  user: UserType;
  showGoChat: boolean;
}

// 목데이터라 user 구분을 인덱스로함
// 0 번째 -> user
// 그 외 -> friend
const ListItem = ({ user, showGoChat }: ListItemProps) => (
  <div className={cx('list')}>
    <img src={images.UserProfile} className={cx('profile')} />
    <div className={cx('text-container')}>
      <p className={cx('nickname')}>{user.nickname}</p>
      <p className={cx('message')}>{user.message}</p>
    </div>
    {showGoChat && <img src={images.GoChat} className={cx('go-chat')} />}
  </div>
);

export default function List() {
  return (
    <div className={cx('list-container')}>
      <div>
        {data.length > 0 && (
          <>
            <ListItem user={data[0]} showGoChat={false} />
            <hr className={cx('user-hr')} />
          </>
        )}
      </div>

      {/* 나머지 데이터 리스트 */}
      <div className={cx('unuser')}>
        {data.slice(1).map((user, idx) => (
          <ListItem key={idx} user={user} showGoChat={true} />
        ))}
      </div>
    </div>
  );
}
