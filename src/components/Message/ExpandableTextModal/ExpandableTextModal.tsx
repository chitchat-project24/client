import { images } from '../../../assets/images';
import styles from './ExpandableTextModal.module.scss';
import cs from 'classnames/bind';

const cx = cs.bind(styles);

interface ModalProps {
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ content, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={cx('fixed-modal-container')} onClick={onClose}>
      <div
        className={cx('modal-content-container')}
        onClick={(e) => e.stopPropagation()} // 모달 내용 클릭 시 모달이 닫히지 않도록
      >
        <div className={cx('modal-close')} onClick={onClose}>
          <img src={images.Close} />
        </div>
        <div className={cx('modal-content')}>{content}</div>
      </div>
    </div>
  );
}
