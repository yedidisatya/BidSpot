import React from 'react';
import styles from './Category.module.scss';
import cn from 'classnames';

const Category: React.FC<EmptyObject> = () => {
  return (
    <div className={styles.categoryBased}>
      <div className="row my-5">
        <h2 className={cn(styles.categoryTitle, 'text-middle my-5')}>Shop By Category</h2>
        <div className="row">
          <div className={cn(styles.categoryList, 'd-flex')}>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/bikes.jpg"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>Bike</p>
            </div>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/cars.jpg"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>Car</p>
            </div>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="	https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/scooters.jpg"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>Scooter</p>
            </div>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/electric-cars.jpg"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>EV</p>
            </div>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="	https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/cycles.jpg"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>Bicycle</p>
            </div>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/planes.jpg"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>Plane</p>
            </div>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/taxis.jpg"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>Taxi</p>
            </div>
            <div className={cn(styles.categoryItem, 'mx-3')}>
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/buses.jpg"
                alt="Sort Img"
              />
              <p className={styles.categoryItemTitle}>Bus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Category };
