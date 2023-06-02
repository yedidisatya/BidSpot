import React from 'react';
import styles from './AccountDetails.module.scss';
//import cn from 'classnames';

const AccountDetails: React.FC<EmptyObject> = () => {
  return (
    <div>
      <span className={styles.smallText}>Hello, Sign in</span>
      <p>Account &#9662;</p>
    </div>
  );
};

export { AccountDetails };
