import React from 'react';
import Review from './Review/Review';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
	return (
		<>
			<Slider></Slider>	
			<Services></Services>
			<Review></Review>
		</>
	);
};

export default Home;