import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Carousal/Caroline.css'; // Make sure to import your stylesheet


const PartnersSlider = () => {
  useEffect(() => {
    // Initialize Slick here
    $('.slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  }, []); // Run this effect once on component mount

  return (
    <div className="container">
      <h2 className="text-center font-weight-bold">Our Partners</h2>
      <section className="customer-logos slider">
        <div className="slide">
          <img src="images/adidas.png" alt="logo" />
        </div>
        {/* Add more logo slides here */}
      </section>
    </div>
  );
};

const Caroline = () => (
  <div>
    <PartnersSlider />
    <p className="copy text-center font-weight-bold">All Rights Reserved © Make Dev</p>
  </div>
);

export default Caroline ;
