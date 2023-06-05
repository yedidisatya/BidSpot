import React from 'react';
import styles from './Category.module.scss';
import cn from 'classnames';

const Category: React.FC<EmptyObject> = () => {
  return (
    <div className={styles.categoryBased}>
      <div className="row my-5">
        <h2 className={cn(styles.categoryTitle, 'text-middle my-5')}>Search By Category</h2>
        <div className="row">
          <div className={cn(styles.categoryList, 'd-flex justify-content-center')}>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>Residential</p>
            </div>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="https://images.pexels.com/photos/1240435/pexels-photo-1240435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>Commercial</p>
            </div>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>Plot / Land</p>
            </div>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="https://cdn.pixabay.com/photo/2021/02/02/18/46/city-5974876_640.jpg"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>Apartment / Flat</p>
            </div>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>Villa / Independent house</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Category };
