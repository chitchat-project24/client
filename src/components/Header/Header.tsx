import { images } from '../../assets/images';
import styles from './Header.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

interface ListTypeProps {
  listType: 'user' | 'message' | 'setting';
}

const title: Record<ListTypeProps['listType'], string> = {
  user: '친구',
  message: '채팅',
  setting: '설정',
};

const icon: Record<ListTypeProps['listType'], string[]> = {
  user: [images.Search, images.UserPlus],
  message: [images.Search],
  setting: [],
};

// 임의로 listType에 user를 넣어놓음
export default function Header({ listType }: ListTypeProps) {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>{title['user']}</h2>
      <div className={cx('img-container')}>
        {icon['user'].map((src, idx) => (
          <img key={idx} src={src} className={cx('img', idx)}></img>
        ))}
      </div>
    </div>
  );
}
