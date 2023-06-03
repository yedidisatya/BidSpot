import React from 'react';
import styles from './HowItWorks.module.scss';
import cn from 'classnames';

const HowItWorks: React.FC<EmptyObject> = () => {
  return (
    <div className={styles.howItWorks}>
      <div className="row my-5">
        <div className="text-middle">
          <h2 className={styles.howItWorksTitle}>How BidSpot® Works</h2>
          <h4 className={styles.howItWorksSubTitle}>
            You won't just love our cars, you'll love the way you buy them.
          </h4>
        </div>
        <div className="row">
          <div className={cn(styles.howItWorksItems, 'col-md-4 text-middle')}>
            <img
              className="my-3"
              src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/CarBuyingProcess/assets/choose_from_the_best_pre_owned_cars.png?w=500"
              alt="imgA1"
            ></img>
            <div className={styles.HowItsWorkContent}>
              <h2 className={styles.HowItsWorkHeading}>Choose from the best</h2>
              <h2 className={styles.HowItsWorkHeading}>pre-owned cars</h2>
              <p className={styles.HowItsWorkDetails}>
                5000+ fully inspected cars online. Buy with money back guarantee.
              </p>
              <span className={styles.HowItsWorkViewBtn}>
                View All Cars <i className="fa fa-angle-right"></i>
              </span>
            </div>
          </div>
          <div className={cn(styles.howItWorksItems, 'col-md-4 text-middle')}>
            <img
              className="my-3"
              src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/CarBuyingProcess/assets/take_a_test_drive_at_your_home_or_spinny_hub.png?w=500"
              alt="imgb2"
            ></img>
            <div className={styles.HowItsWorkContent}>
              <h2 className={styles.HowItsWorkHeading}>Take a test drive at your</h2>
              <h2 className={styles.HowItsWorkHeading}>Home or Spinny Hub</h2>
              <p className={styles.HowItsWorkDetails}>
                Sanitised cars for every test drive. Executives trained for COVID protection.
              </p>
              <span className={styles.HowItsWorkViewBtn}>
                Book Test Drive <i className="fa fa-angle-right"></i>
              </span>
            </div>
          </div>
          <div className={cn(styles.howItWorksItems, 'col-md-4 text-middle')}>
            <img
              className="my-3"
              src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/CarBuyingProcess/assets/online_payment_doorstep_delivery.png?w=500"
              alt="imgc3"
            ></img>
            <div className={styles.HowItsWorkContent}>
              <h2 className={styles.HowItsWorkHeading}>Online Payment.</h2>
              <h2 className={styles.HowItsWorkHeading}>Doorstep Delivery.</h2>
              <p className={styles.HowItsWorkDetails}>
                Contactless transaction 5-day money back guarantee.
              </p>
              <span className={styles.HowItsWorkViewBtn}>
                Buy a Car <i className="fa fa-angle-right"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="row text-center my-5">
          <div className="d-flex justify-content-center">
            <span className={styles.watchHowItWorksBtn}>
              Watch how it works <i className="fa fa-caret-right mx-2"></i>
            </span>
          </div>
          <div className="my-3">
            <span className={styles.learnMoreBtn}>
              Learn More <i className="fa fa-angle-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HowItWorks };
