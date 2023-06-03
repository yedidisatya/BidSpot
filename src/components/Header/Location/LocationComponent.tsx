import React from 'react';
import styles from './Location.module.scss';
//import cn from 'classnames';

const Location: React.FC<EmptyObject> = () => {
  return (
    <span className={styles.selectCity}>
      Select City
      <span className={styles.downIcon}>
        <i className="fa fa-sort-desc"></i>
      </span>
    </span>
  );
};

export { Location };
