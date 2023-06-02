import React from 'react';
import styles from './NavigationBar.module.scss';
import cn from 'classnames';

const NavigationBar: React.FC<EmptyObject> = () => {
  return (
    <div className={styles.mainNavigation}>
      <div className="row">
        <div className="d-flex align-items-center justify-content-center">
          <div className={cn(styles.navItem, 'mx-5 text-muted')}>
            <p>EXPLORE BY</p>
          </div>
          <div className={cn(styles.navItem, 'mx-5 d-flex')}>
            <p>Price Range</p>
            <i className={'fa fa-angle-down'}></i>
          </div>
          <div className={cn(styles.navItem, 'mx-5 d-flex')}>
            <p>Plot By Area</p>
            <i className={'fa fa-angle-down'}></i>
          </div>
          <div className={cn(styles.navItem, 'mx-5 d-flex')}>
            <p>Sell the Plot</p>
            <i className={'fa fa-angle-down'}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NavigationBar };
