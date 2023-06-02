import React from 'react';
import styles from './MainSearch.module.scss';
import cn from 'classnames';

const MainSearch: React.FC<EmptyObject> = () => {
  return (
    <div>
      <input placeholder="Search by Make, Model, Type etc." />
      <i className={cn(styles.searchIcon, 'fa fa-search')}></i>
    </div>
  );
};

export { MainSearch };
