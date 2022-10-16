import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

 /* import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();  */

const Services = () => {	
	return (
		<>
			<section className="services-container">
				<h4 className="services-title">
				
					URBAN GAZ OFFERINGS
				</h4>

				<section className="services-wrapper">
					<Link to='/' className='link'>
						<section className="service post-service" data-aos="fade-right">
							<h4 className="service-button">
								Gaz Management
							</h4>
						</section>
					</Link>
					<Link to='/' className='link'>
						<section className="service install-service" data-aos="fade-right">
							<h4 className="service-button">
								Gaz Distribution
							</h4>
						</section>
					</Link>
					<Link to='/' className='link'>
						<section className="service smart-billing" data-aos="fade-right">
							<h4 className="service-button delivery-btn">
								Smart Billing
							</h4>
						</section>
					</Link>
					<Link to='/' className='link'>
						<section className="service delivery-service" data-aos="fade-right">
							<h4 className="service-button schedule-btn">
								Schedule Maintenance
							</h4>
						</section>
					</Link>
				</section>
			</section>
		</>
	);
};

export default Services;