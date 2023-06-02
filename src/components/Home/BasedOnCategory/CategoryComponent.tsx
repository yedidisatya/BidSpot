import React from 'react';
import styles from './Category.module.scss';
// import cn from 'classnames';

const Category: React.FC<EmptyObject> = () => {
  return (
    <div className={styles.categoryBased}>
      <div className="row mx-5">
        <h3 className="text-start my-3">Shop By Category</h3>
        <div className="row">
          <div className="d-flex">
            <div className="mx-3">
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/bikes.jpg"
                alt="Sort Img"
              />
              <p>Bike</p>
            </div>
            <div className="mx-3">
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/bikes.jpg"
                alt="Sort Img"
              />
              <p>Bike</p>
            </div>
            <div className="mx-3">
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/bikes.jpg"
                alt="Sort Img"
              />
              <p>Bike</p>
            </div>
            <div className="mx-3">
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/bikes.jpg"
                alt="Sort Img"
              />
              <p>Bike</p>
            </div>
            <div className="mx-3">
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/bikes.jpg"
                alt="Sort Img"
              />
              <p>Bike</p>
            </div>
            <div className="mx-3">
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/bikes.jpg"
                alt="Sort Img"
              />
              <p>Bike</p>
            </div>
            <div className="mx-3">
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/bikes.jpg"
                alt="Sort Img"
              />
              <p>Bike</p>
            </div>
            <div className="mx-3">
              <img
                src="https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/bikes.jpg"
                alt="Sort Img"
              />
              <p>Bike</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Category };
