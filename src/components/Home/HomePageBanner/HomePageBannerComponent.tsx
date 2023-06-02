import React from 'react';
import styles from './HomePageBanner.module.scss';
import Slider from 'react-slick';
import cn from 'classnames';
// import img1 from '../../../images/img1.jpg';
// import img2 from '../../../images/img2.jpg';
// import img3 from '../../../images/img3.jpg';

const HomePageBanner: React.FC<EmptyObject> = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          className={cn(styles.scrollImg, 'w-100')}
          src="https://cdn1.acedms.com/photos/images/banner/OBV_1920x500_Homepage-Banner_30-May-2023.jpg.webp"
          alt="img1111"
        />
      </div>
      <div>
        <img
          className={cn(styles.scrollImg, 'w-100')}
          src="https://cdn1.acedms.com/photos/images/banner/wjgCJ-Ug.jpeg.webp"
          alt="img22221"
        />
      </div>
    </Slider>
  );
};

export { HomePageBanner };
