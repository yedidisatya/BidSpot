import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC<EmptyObject> = () => {
  return <div className={styles.header}>Hello Header</div>;
};

export { Header };
