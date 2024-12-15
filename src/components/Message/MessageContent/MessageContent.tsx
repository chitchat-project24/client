import { useState, useEffect, useRef } from 'react';
import { images } from '../../../assets/images';
import { Message } from '../../../types';
import { getFoatmatDate } from '../../../utils';
import messageData from '../../../data/message.json';
import { ExpandableTextModal } from '../ExpandableTextModal';
import styles from './MessageContent.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

export default function MessageContent() {
  const userId = '1234'; // 임의로 id 지정
  const [data, setData] = useState<Array<Message>>(messageData);
  const maxLines = 15;

  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  // 줄 수 계산
  const calculateLineCount = (contentRef: React.RefObject<HTMLDivElement>) => {
    if (contentRef.current) {
      const computedStyle = window.getComputedStyle(contentRef.current);
      const lineHeight = parseFloat(computedStyle.lineHeight); // line-height 값을 가져옴
      const contentHeight = contentRef.current.offsetHeight;

      return Math.ceil(contentHeight / lineHeight);
    }
    return 0;
  };

  // 모달 열기 함수
  const openModal = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <div className={cx('content-container')}>
      {data.map((message, idx) => {
        const currentDate = getFoatmatDate(message.sent_at, 'yearMonthDay');
        const previousDate =
          idx > 0
            ? getFoatmatDate(data[idx - 1].sent_at, 'yearMonthDay')
            : null;
        const isNewDate =
          !previousDate ||
          currentDate.dateNumberWithoutTime !==
            previousDate.dateNumberWithoutTime; // 새로운 날짜인지 확인

        // 전체보기
        const [lineCount, setLineCount] = useState(0);
        const contentRef = useRef<HTMLDivElement>(null);

        // 렌더링 후 lineCount 계산
        useEffect(() => {
          if (contentRef.current) {
            const count = calculateLineCount(contentRef);
            setLineCount(count);
          }
        }, [message.content]);

        return (
          <div key={idx}>
            <div className={cx('date-wrapper')}>
              {isNewDate && (
                <div className={cx('date')}>{currentDate.formattedDate}</div>
              )}
            </div>
            <div
              className={cx(
                'message',
                message.user_id === userId ? 'user' : 'notuser',
              )}
            >
              {message.user_id !== userId && (
                <div className={cx('profile-img')}>
                  <img src={images.UserProfile} alt="not user img" />
                </div>
              )}
              {/* 메시지 본문 */}
              <div className={cx('content-div')}>
                <div className={cx('content')} ref={contentRef}>
                  <div
                    className={cx('content-text')}
                    style={{
                      maxHeight: `${maxLines * 1.4}em`,
                      overflow: 'hidden',
                    }}
                  >
                    {message.content}
                  </div>
                  {lineCount > maxLines && (
                    <>
                      <hr />
                      <div
                        className={cx('expandable-wrapper')}
                        onClick={() => openModal(message.content)}
                      >
                        <span>전체보기</span>
                        {message.user_id === userId ? (
                          <img src={images.UserRightArrow} />
                        ) : (
                          <img src={images.FriendRightArrow} />
                        )}
                      </div>
                    </>
                  )}
                </div>
                <div className={cx('detail')}>
                  <p className={cx('read-status')}>
                    {message.is_read ? '\u00A0' : '1'}
                  </p>
                  <p className={cx('send-time')}>
                    {new Date(message.sent_at).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                      timeZone: 'UTC',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* 전체보기 모달 */}
      <ExpandableTextModal
        content={modalContent}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
