import React from 'react';
// import reviewbg from '../img/review/reviewbg.jpg'; 
import { ImQuotesLeft } from 'react-icons/im';
import './Review.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Review = () => {
	return (
		<>
			<main className="main-review-container">
			<h4 className="new-review-title"> Reviews </h4>
			<section className="new-review-container">				
				<section className="new-review-wrapper">
					<article className='new-single-review' data-aos="slide-up">
						<div className="new-article-wrapper">
						<div className="new-review-icon">
						 <ImQuotesLeft />
						 </div>
						<p className="new-review-info">
						
						We are delighted with the services of Urban Gaz. From the very beginning, it was our core plan to avail all the modern day facilities in our condominium project. Almost everything we have managed but we were uncertain about gas though we had ready infrastructure for gas. So, when Urban Gaz approached with their complete gas management proposal, we had just received what was needed. Last one year we have been monitoring their service & we have found it amazing. Now it seems possible that all our upcoming residential projects can have uninterrupted supply gas without Titash, our warm thanks to Urban Gaz for making this happen. Good luck team Urban Gaz. 
							</p>
						</div>
						<div className="new-review-footer-info">
							<h5 className='new-review-name'>Khurrum Siddique</h5>
							<h6 className="new-designation">
							Managing Director at Simco Holdings Limited.
							</h6>
						</div>
					</article>
					{/* end one review */}
					<article className='new-single-review' data-aos="slide-up">
						<div className="new-article-wrapper">
						<div className="new-review-icon">
						 <ImQuotesLeft />
						 </div>
						<p className="new-review-info">
						
						It’s been 10 months now, and I am receiving “Post-paid Metered LP Gas” service from Urban Gaz. My experience says it has saved a great amount of my time. My building management becomes easier. All my tenants are very happy with this innovative service & their online payment facilities. Moreover, I feel safe now because I don't have to worry about refilling, billing & maintenance. I have already recommended Urban Gaz’s service to some of my friends.   
						</p>
						</div>
						<div className="new-review-footer-info">
							<h5 className='new-review-name'>Mr. Sunny</h5>
							<h6 className="new-designation">
							Owner, Shaheen Nibash, Bashundhara R/A
							</h6>
						</div>
					</article>
				</section>
				</section>
				</main>
		</>
	);
};

export default Review;