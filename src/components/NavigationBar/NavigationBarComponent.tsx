import React from 'react';
import styles from './NavigationBar.module.scss';

const NavigationBar: React.FC<EmptyObject> = () => {
  return <div className={styles.home}>The Nav Bar</div>;
};

export { NavigationBar };
