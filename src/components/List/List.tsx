import profileData from '../../data/profile.json';
import messageData from '../../data/chatlist.json';
import styles from './List.module.scss';
import cs from 'classnames/bind';
import { useEffect, useState } from 'react';
import { ListItem } from '../../components';
import { User, Message } from '../../types';
const cx = cs.bind(styles);

interface PageTypeProps {
  pageType: 'user' | 'message';
}

export default function List({ pageType }: PageTypeProps) {
  const [data, setData] = useState<Array<User | Message>>([]);

  useEffect(() => {
    if (pageType === 'user') {
      setData(profileData);
    } else {
      setData(messageData);
    }
  }, [pageType]);

  return (
    <div className={cx('list-container')}>
      {pageType === 'user' ? (
        <>
          {/* 임의로 0 번째 데이터가 자신이라고 가정 */}
          {data.length > 0 && (
            <div className={cx('user')}>
              <ListItem user={data[0]} pageType={pageType} showGoChat={false} />
              <hr className={cx('user-hr')} />
            </div>
          )}
          <div className={cx('unuser')}>
            {data.slice(1).map((user, idx) => (
              <ListItem
                key={idx}
                user={user}
                pageType={pageType}
                showGoChat={true}
              />
            ))}
          </div>
        </>
      ) : (
        <div className={cx('messages')}>
          {data.map((user, idx) => (
            <ListItem
              key={idx}
              user={user}
              pageType={pageType}
              showMore={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
