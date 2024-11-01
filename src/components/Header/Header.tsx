import { images } from '../../assets/images';
import styles from './Header.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

interface PageTypeProps {
  pageType: 'user' | 'message' | 'setting';
}

const title: Record<PageTypeProps['pageType'], string> = {
  user: '친구',
  message: '채팅',
  setting: '설정',
};

const icon: Record<PageTypeProps['pageType'], string[]> = {
  user: [images.Search, images.UserPlus],
  message: [images.Search],
  setting: [],
};

export default function Header({ pageType }: PageTypeProps) {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>{title[pageType]}</h2>
      <div className={cx('img-container')}>
        {icon[pageType].map((src, idx) => (
          <img key={idx} src={src} className={cx('img', idx)}></img>
        ))}
      </div>
    </div>
  );
}
