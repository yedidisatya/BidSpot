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
                <div className={styles.redBtn}>Check For Loan</div>
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
      <div className={cn(styles.section2, 'row my-2')}>
        <h3 className={cn(styles.blockHeader, 'text-start')}>Highlights Of Property</h3>
        <div className={styles.propertyHighlights}>
          <ul className="text-start p-0">
            <li>
              <i className="fa fa-smile-o m-2"></i>Next to Haldiram’s – Green Park
            </li>
            <li>
              <i className="fa fa-smile-o m-2"></i>Near Madhapur Metro Station
            </li>
            <li>
              <i className="fa fa-smile-o m-2"></i>Walkable distance to school
            </li>
            <li>
              <i className="fa fa-smile-o m-2"></i>Has best Air Quality
            </li>
          </ul>
        </div>
      </div>
      <div className={cn(styles.section3, 'row my-2')}>
        <h3 className={cn(styles.blockHeader, 'text-start')}>Property Details</h3>
        <div className={styles.propertyDetails}>
          <div className="row p-3">
            <h5 className={cn(styles.propertyTitle, 'text-start')}>
              1,150 SFT Second Floor in Green Park, New Delhi, Delhi
            </h5>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-3')}>
                Estimated Market Price
              </div>
              <div className={cn(styles.rightData, 'text-start col-md-9')}>
                <s>9632587</s>
              </div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-3')}>Bank's Reserve Price</div>
              <div className={cn(styles.rightData, 'text-start col-md-9')}>7458963</div>
            </div>

            <hr className="my-3"></hr>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>Address</div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>
                Plot No A-10A, 2nd Floor Rear Side, Green Park, New Delhi , Delhi, 110016
              </div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>Property Type</div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>Residential Flat</div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>Possession</div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>Physical Possession</div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>Seller</div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>ICICI Bank</div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>Bulit-Up Area</div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>1024 SFT</div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>Total Area</div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>1,150 SFT</div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>Property ID</div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>14523</div>
            </div>
            <div className="row my-3">
              <div className="col-md-6">
                <div className={styles.primaryBtn}>I'm interested</div>
              </div>
              <div className="col-md-6">
                <div className={styles.redBtn}>Check For Loan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(styles.section4, 'row my-2')}>
        <h3 className={cn(styles.blockHeader, 'text-start')}>Application Details</h3>
        <div className={styles.propertyDetails}>
          <div className="row p-3">
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>Application Deadline</div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>Open</div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>
                Earnest Money Deposit
              </div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>
                <i className="fa fa-inr"> </i>20,00,000
              </div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>Auction Date & Time</div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>Open</div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>Private Treaty</div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>No</div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>Bulit-Up Area</div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>1024 SFT</div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>CERSAI </div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>
                Generate CERSAI Report
              </div>
            </div>
            <div className="row">
              <div className={cn(styles.leftData, 'text-start col-md-4')}>Property ID</div>
              <div className={cn(styles.rightData, 'text-start col-md-8')}>14523</div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(styles.section5, 'row my-2')}>
        <h3 className={cn(styles.blockHeader, 'text-start')}>Location In Map</h3>
        <div className={styles.propertyLocation}>Map Here</div>
      </div>
      <div className={cn(styles.section6, 'row my-2')}>
        <h3 className={cn(styles.blockHeader, 'text-start')}>Similar Property's</h3>
        <div className={cn(styles.propertyLocation, 'row')}>
          <div className="col-md-3">Item 1</div>
          <div className="col-md-3">Item 2</div>
          <div className="col-md-3">Item 3</div>
          <div className="col-md-3">Item 4</div>
        </div>
      </div>
    </div>
  );
};

export { ProductDetails };
