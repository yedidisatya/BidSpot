import React from 'react';
import styles from './AccountDetails.module.scss';
//import cn from 'classnames';

const AccountDetails: React.FC<EmptyObject> = () => {
  return (
    <div className={styles.accountDetails}>
      <span className={styles.smallText}>Hello, Sign in</span>
      <p className={styles.accountText}>
        Account <i className="fa fa-angle-down"></i>
      </p>
    </div>
  );
};

export { AccountDetails };
