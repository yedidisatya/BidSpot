import React from 'react';
import styles from './HomePageBanner.module.scss';
import Slider from 'react-slick';
import cn from 'classnames';

const HomePageBanner: React.FC<EmptyObject> = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };
  return (
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
  );
};

export { HomePageBanner };
