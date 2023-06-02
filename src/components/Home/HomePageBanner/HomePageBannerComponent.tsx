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
          src="https://www.w3schools.com/bootstrap5/ny.jpg"
          alt="img1111"
        />
      </div>
      <div>
        <img
          className={cn(styles.scrollImg, 'w-100')}
          src="https://www.w3schools.com/bootstrap5/chicago.jpg"
          alt="img22221"
        />
      </div>
      <div>
        <img
          className={cn(styles.scrollImg, 'w-100')}
          src="https://www.w3schools.com/bootstrap5/la.jpg"
          alt="img3333"
        />
      </div>
    </Slider>
  );
};

export { HomePageBanner };
