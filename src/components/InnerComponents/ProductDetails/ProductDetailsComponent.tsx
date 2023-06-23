import React from 'react';
import styles from './ProductDetails.module.scss';
import Slider from 'react-slick';
import cn from 'classnames';

const ProductDetails: React.FC<EmptyObject> = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };
  return (
    <div className={styles.productDetailsPage}>
      <div className="row">
        <div className={cn(styles.productImgSlider, 'col-md-9')}>
          <Slider {...settings}>
            <div>
              <img
                className={cn(styles.scrollImg, 'w-100')}
                src="https://cdn1.acedms.com/photos/images/banner/OBV_1920x500_Homepage-Banner_30-May-2023.jpg.webp"
                alt="img1"
              />
            </div>
            <div>
              <img
                className={cn(styles.scrollImg, 'w-100')}
                src="https://cdn1.acedms.com/photos/images/banner/wjgCJ-Ug.jpeg.webp"
                alt="img2"
              />
            </div>
            <div>
              <img
                className={cn(styles.scrollImg, 'w-100')}
                src="https://cdn1.acedms.com/photos/images/banner/7pW7ghhE.jpeg.webp"
                alt="img3"
              />
            </div>
            <div>
              <img
                className={cn(styles.scrollImg, 'w-100')}
                src="https://cdn1.acedms.com/photos/images/web/content/Homepage-Banner-Desktop-new.jpg.webp"
                alt="img4"
              />
            </div>
          </Slider>
        </div>
        <div className={cn(styles.productDetails, 'col-md-3')}>
          <div className={cn(styles.detailsBlock, 'row')}>
            <div className="col-md-9 text-start">
              <div className={styles.productTop}>
                <h2>2014 Maruti Suzuki Swift LDi</h2>
                <p>36957 Km Diesel AMT </p>
                <p>Home Test Drive: Available</p>
              </div>
            </div>
            <div className="col-md-3 text-end">
              <div>Heart List</div>
            </div>
          </div>
          <div className={cn(styles.detailsBlock, 'row text-start')}>
            <p>Location : KKD, Madhapur, Hyd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductDetails };
