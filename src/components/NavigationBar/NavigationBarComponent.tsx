import React from 'react';
import styles from './NavigationBar.module.scss';
import cn from 'classnames';

const NavigationBar: React.FC<EmptyObject> = () => {
  return (
    <div className={styles.mainNavigation}>
      <div className="row">
        <div className={cn(styles.navHead, 'd-flex align-items-center justify-content-center p-3')}>
          <div className={cn(styles.navItem, 'mx-5 text-muted')}>
            <p>EXPLORE BY</p>
          </div>
          <div className={cn(styles.navItem, 'mx-5 d-flex')}>
            <p>Vehicle</p>
            <i className={'fa fa-angle-down'}></i>
          </div>
          <div className={cn(styles.navItem, 'mx-5 d-flex')}>
            <p>Properties</p>
            <i className={'fa fa-angle-down'}></i>
          </div>
          <div className={cn(styles.navItem, 'mx-5 d-flex')}>
            <p>Gold</p>
            <i className={'fa fa-angle-down'}></i>
          </div>
        </div>
      </div>
      <div className={styles.searchByCity}>
        <div className="row mt-5">
          <div className={styles.searchByCityTittle}>Explore By Location</div>
          <div className="d-flex text-center justify-content-center">
            <div className={cn(styles.cityItem, 'mx-5')}>
              <img src="https://cdn-icons-png.flaticon.com/128/2465/2465341.png" alt="Bangalore" />
              <p>Delhi</p>
            </div>

            <div className={cn(styles.cityItem, 'mx-5')}>
              <img src="https://cdn-icons-png.flaticon.com/128/1282/1282509.png" alt="Bangalore" />
              <p>Bangalore</p>
            </div>
            <div className={cn(styles.cityItem, 'mx-5')}>
              <img src="https://cdn-icons-png.flaticon.com/128/3375/3375454.png" alt="Bangalore" />
              <p>Mumbai</p>
            </div>
            <div className={cn(styles.cityItem, 'mx-5')}>
              <img src="https://cdn-icons-png.flaticon.com/128/510/510020.png" alt="Bangalore" />
              <p>Hyderabad</p>
            </div>
            <div className={cn(styles.cityItem, 'mx-5')}>
              <img src="https://cdn-icons-png.flaticon.com/128/706/706317.png" alt="Bangalore" />
              <p>Agra</p>
            </div>
            <div className={cn(styles.cityItem, 'mx-5')}>
              <img src="https://cdn-icons-png.flaticon.com/128/3806/3806632.png" alt="Bangalore" />
              <p>Vizag</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NavigationBar };
