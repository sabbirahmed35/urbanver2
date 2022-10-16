import React from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import './SocialIcon.css';

const SocialIcon = () => {
	return (
		<>
			<section className="social-container">
			   <a href="https://www.facebook.com/urbangaz"
                            target='blank'>
					<BsFacebook className=" social-icon" />
				</a>
				<a href="https://www.linkedin.com/company/urban-gaz/"
                            target='blank'>
					<BsLinkedin className='social-icon linkedin'/>
					
				</a>
			</section>
		</>
	);
};


export default SocialIcon;
