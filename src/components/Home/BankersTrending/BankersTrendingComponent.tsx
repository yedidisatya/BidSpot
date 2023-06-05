import React from 'react';
import styles from './BankersTrending.module.scss';
import Slider from 'react-slick';
import cn from 'classnames';

const BankersTrending: React.FC<EmptyObject> = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };
  return (
    <div className={styles.bankersTrending}>
      <div className={styles.ourBankers}>
        <div className="row">
          <h2 className={cn(styles.categoryTitle, 'text-middle my-5')}>Our Bankers</h2>
          <Slider {...settings}>
            <div>
              <img
                className={cn(styles.scrollImg, '')}
                src="https://catking.in/wp-content/uploads/2020/05/yes-bank-1024x426.png"
                alt="YES Bank"
              />
            </div>
            <div>
              <img
                className={cn(styles.scrollImg, '')}
                src="	https://catking.in/wp-content/uploads/2020/05/indusind.png"
                alt="Indus Bank"
              />
            </div>
            <div>
              <img
                className={cn(styles.scrollImg, '')}
                src="https://catking.in/wp-content/uploads/2020/05/ratnakar-bank-e1589457632901-1024x498.jpg"
                alt="RBL Bank"
              />
            </div>
            <div>
              <img
                className={cn(styles.scrollImg, '')}
                src="https://catking.in/wp-content/uploads/2020/05/ing-vysya-bank.jpg"
                alt="Ing Bank"
              />
            </div>
            <div>
              <img
                className={cn(styles.scrollImg, '')}
                src="https://catking.in/wp-content/uploads/2020/05/ICICI-Ban.jpg"
                alt="Icici Bank"
              />
            </div>
            <div>
              <img
                className={cn(styles.scrollImg, '')}
                src="https://catking.in/wp-content/uploads/2020/05/hdfc.jpg"
                alt="HDFC bank"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export { BankersTrending };
