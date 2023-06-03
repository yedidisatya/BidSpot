import React from 'react';
import styles from './HowItWorks.module.scss';
import cn from 'classnames';

const HowItWorks: React.FC<EmptyObject> = () => {
  return (
    <div className={styles.howItWorks}>
      <div className="row my-5">
        <div className="text-middle">
          <h2>How BidSpot® Works</h2>
          <h4>You won't just love our cars, you'll love the way you buy them.</h4>
        </div>
        <div className="row">
          <div className={cn(styles.howItWorksItems, 'col-md-4 text-middle')}>
            <img
              src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/CarBuyingProcess/assets/choose_from_the_best_pre_owned_cars.png?w=500"
              alt="imgA1"
            ></img>
            <div className={styles.HowItsWorkContent}>
              <h2 className={styles.HowItsWorkHeading}>Choose from the best</h2>
              <h2 className={styles.HowItsWorkHeading}>pre-owned cars</h2>
              <p className={styles.HowItsWorkDetails}>
                5000+ fully inspected cars online. Buy with money back guarantee.
              </p>
              <button>View All Cars</button>
            </div>
          </div>
          <div className={cn(styles.howItWorksItems, 'col-md-4 text-middle')}>
            <img
              src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/CarBuyingProcess/assets/choose_from_the_best_pre_owned_cars.png?w=500"
              alt="imgA1"
            ></img>
            <div className={styles.HowItsWorkContent}>
              <h2 className={styles.HowItsWorkHeading}>Choose from the best</h2>
              <h2 className={styles.HowItsWorkHeading}>pre-owned cars</h2>
              <p className={styles.HowItsWorkDetails}>
                5000+ fully inspected cars online. Buy with money back guarantee.
              </p>
              <button>View All Cars</button>
            </div>
          </div>
          <div className={cn(styles.howItWorksItems, 'col-md-4 text-middle')}>
            <img
              src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/CarBuyingProcess/assets/choose_from_the_best_pre_owned_cars.png?w=500"
              alt="imgA1"
            ></img>
            <div className={styles.HowItsWorkContent}>
              <h2 className={styles.HowItsWorkHeading}>Choose from the best</h2>
              <h2 className={styles.HowItsWorkHeading}>pre-owned cars</h2>
              <p className={styles.HowItsWorkDetails}>
                5000+ fully inspected cars online. Buy with money back guarantee.
              </p>
              <button>View All Cars</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HowItWorks };
