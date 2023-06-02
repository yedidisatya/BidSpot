import React from 'react';
import styles from './Location.module.scss';
//import cn from 'classnames';

const Location: React.FC<EmptyObject> = () => {
  return (
    <span className={styles.selectCity}>
      Select City<span className={styles.downIcon}>&#9662;</span>
    </span>
  );
};

export { Location };
