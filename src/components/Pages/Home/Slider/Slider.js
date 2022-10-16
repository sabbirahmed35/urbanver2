import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sliderone from '../../../../assets/img/slider/sliderone.jpg';
import slidertwo from '../../../../assets/img/slider/slidertwo.jpg';
import { Link } from 'react-router-dom';
import "./Slider.css";

const Slider = () => {
	const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
	return (
		
		<>
		  <Carousel fade className='d-none d-sm-block'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {sliderone}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {slidertwo}
          alt="Second slide"
        />
      </Carousel.Item>
      
    </Carousel>
			
			{/* mobile section */}
			<section className='mobile-banner-container d-block d-sm-none hero'>
				<div className="banner-info-wrapper hero-banner">
					
				</div>
			</section>
		
		</>
	);
};

export default Slider;