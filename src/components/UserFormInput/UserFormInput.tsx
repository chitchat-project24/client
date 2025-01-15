import { useState } from 'react';
import { images } from '../../assets/images';
import styles from './UserFormInput.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

interface UserFormInputProps {
  type: 'id' | 'password';
}

export default function UserFormInput({ type }: UserFormInputProps) {
  const typeInfos = {
    id: {
      placeholderText: '이메일',
      image: images.InputUser,
    },
    password: {
      placeholderText: '비밀번호',
      image: images.inputPassword,
    },
  };

  const typeInfo: {
    placeholderText: string;
    image: string;
  } = typeInfos[type];

  return (
    <div className={cx('input-container')}>
      <div className={cx('input-icon')}>
        <img src={typeInfo?.image} />
      </div>
      <input placeholder={typeInfo?.placeholderText} />
    </div>
  );
}
