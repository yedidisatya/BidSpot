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
      <div className={cn(styles.section1, 'row')}>
        <div className={cn(styles.productImgSlider, 'col-md-8')}>
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
        <div className={cn(styles.productDetails, 'col-md-4')}>
          <div className={cn(styles.detailsBlock, 'row')}>
            <div className="col-md-9 text-start">
              <div className={styles.productTop}>
                <h2 className={styles.productName}>2019 Tata Harrier XZ</h2>
                <p className={styles.productInfo}>36957 Km Diesel AMT </p>
                <p className={styles.productInfo2}>Home Test Drive: Available</p>
              </div>
            </div>
            <div className="col-md-3 text-end">
              <div className={styles.favtIcon}>
                <i className="fa fa-heart-o"></i>
              </div>
            </div>
          </div>
          <div className={cn(styles.location, 'row text-start')}>
            <p>
              <i className="fa fa-map-marker"></i>
              <span className={styles.address}>Location : Mindspace, Madhapur, Hyd</span>
            </p>
          </div>
          <hr className="m-0"></hr>
          <div className={styles.priceInfo}>
            <div className={cn(styles.price, 'row my-2')}>
              <div className={cn(styles.priceValue, 'col-md-8 text-start')}>
                <div>
                  <i className="fa fa-inr"></i>13.25 Lakh
                </div>
                <p className={styles.priceValueText}>Fixed price</p>
              </div>
              <div className={cn(styles.priceEMI, 'col-md-4 text-end')}>
                <i className="fa fa-inr"></i>24,118 / m <i className="fa fa-info-circle"></i>
              </div>
            </div>
          </div>
          <div className={styles.mainBtns}>
            <div className="row">
              <div className="col-md-6">
                <div className={styles.primaryBtn}>Get It Now</div>
              </div>
              <div className="col-md-6">
                <div className={styles.redBtn}>Check It</div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className={cn(styles.bottomInfo, 'row py-2 text-start')}>
            <p>
              We put every car through a 200 point inspection so that you can be 100% confident in
              the quality of the Product.
            </p>
          </div>
        </div>
      </div>
      <div className={cn(styles.section2, 'row my-2')}>Hello</div>
    </div>
  );
};

export { ProductDetails };
