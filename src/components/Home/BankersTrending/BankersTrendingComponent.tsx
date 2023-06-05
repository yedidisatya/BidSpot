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
      <div className={styles.trendingInMarket}>
        <div className="row py-5">
          <h2 className={cn(styles.categoryTitle, 'text-middle my-5')}>
            Properties Trending In Market
          </h2>
          <div className={cn(styles.titles, 'row')}>
            <div className="col-md-4">
              <div className={cn(styles.titleItem, 'row m-2 p-2')}>
                <img
                  src="	https://strata-prod-strapi-images.s3.ap-south-1.amazonaws.com/desktop_home_page_60e957c08f.png"
                  alt="img1"
                />
                <h3 className="my-1">Pune</h3>
                <p>Location: Hinjewadi, Pune</p>
                <p>
                  Target IRR: <span className={styles.value}>13%</span>
                </p>
                <p>
                  Rental Yield: <span className={styles.value}>20%</span>
                </p>
                <p className={styles.price}>
                  Asset value: <i className="fa fa-rupee"></i> <span>523689</span>
                </p>
                <p className={cn(styles.viewDetails, 'p-2')}>View Details</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={cn(styles.titleItem, 'row m-2 p-2')}>
                <img
                  src="https://strata-prod-strapi-images.s3.ap-south-1.amazonaws.com/edge_4f82dabe2e.jpg"
                  alt="img1"
                />
                <h3 className="my-1">Delhi</h3>
                <p>Location: Sector 45-B</p>
                <p>
                  Target IRR: <span className={styles.value}>6%</span>
                </p>
                <p>
                  Rental Yield: <span className={styles.value}>7%</span>
                </p>
                <p className={styles.price}>
                  Asset value: <i className="fa fa-rupee"></i> <span>3214569</span>
                </p>
                <p className={cn(styles.viewDetails, 'p-2')}>View Details</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={cn(styles.titleItem, 'row m-2 p-2')}>
                <img
                  src="https://strata-prod-strapi-images.s3.ap-south-1.amazonaws.com/desktop_carousel_1_2067e24035.jpg"
                  alt="img1"
                />
                <h3 className="my-1">Bengaluru </h3>
                <p>Location: Market Rd, Kengeri</p>
                <p>
                  Target IRR: <span className={styles.value}>1%</span>
                </p>
                <p>
                  Rental Yield: <span className={styles.value}>35%</span>
                </p>
                <p className={styles.price}>
                  Asset value: <i className="fa fa-rupee"></i> <span>9896574</span>
                </p>
                <p className={cn(styles.viewDetails, 'p-2')}>View Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BankersTrending };
