import React from 'react';
//import styles from './HomePageBanner.module.scss';
import Slider from 'react-slick';
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
        <img src="images/img1.jpg" alt="img1111" />
      </div>
      <div>
        <h3>Hello222</h3>
        <img src="images/img2.jpg" alt="img22221" />
      </div>
      <div>
        <h3>hello33</h3>
        <img src="images/img3.jpg" alt="img3333" />
      </div>
    </Slider>
  );
};

export { HomePageBanner };
