import { useRef } from 'react';
import { images } from '../../../assets/images';
import classNames from 'classnames/bind';
import styles from './MessageInput.module.scss';

const cx = classNames.bind(styles);

export default function MessageInput() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // textarea height에 따라 container height 조절
  const handleInputHeight = () => {
    const textarea = textareaRef.current;
    const container = containerRef.current;

    if (textarea && container) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;

      // 최대 두 줄
      const maxContainerHeight = 3.2;
      container.style.height = `${Math.min(textarea.scrollHeight, maxContainerHeight * 16)}px`;
    }
  };

  return (
    <div ref={containerRef} className={cx('input-container')}>
      <textarea
        ref={textareaRef}
        onChange={handleInputHeight}
        rows={1}
        className={cx('input')}
      />
      <div className={cx('send')}>
        <img src={images.Send} className={cx('send-img')} alt="send" />
      </div>
    </div>
  );
}
