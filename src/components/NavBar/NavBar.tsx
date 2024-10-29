import React, { useState } from 'react';
import { images } from '../../assets/images';
import styles from './NavBar.module.scss';
import cs from 'classnames/bind';

const cx = cs.bind(styles);

const NavBar: React.FC = () => {
  const [isActive, setIsActive] = useState<string>('user');

  const navItems = [
    { name: 'user', defaultImage: images.User, activeImage: images.WhiteUser },
    {
      name: 'message',
      defaultImage: images.Message,
      activeImage: images.WhiteMessage,
    },
    {
      name: 'setting',
      defaultImage: images.Setting,
      activeImage: images.WhiteSetting,
    },
  ];

  return (
    <div className={cx('wrapper')}>
      {navItems.map(({ name, defaultImage, activeImage }) => (
        <img
          key={name}
          src={isActive === name ? activeImage : defaultImage}
          className={cx({ active: isActive === name })}
          onClick={() => setIsActive(name)}
          alt={name}
        />
      ))}
    </div>
  );
};

export default NavBar;