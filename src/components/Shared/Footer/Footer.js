import React from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<div className="footer-wrapper">

				<section className="footer-social-wrapper">
					<div className="footer-social-icon">
						<BsFacebook className="" />
					</div>
					<div className="footer-social-icon">
						<BsLinkedin />
					</div>
				</section>
				<p className="footer-info-one">
					<span className='copy-symbol'>&copy;</span> Urban Gaz 2022 - All rights reserved
				</p>
				<div className="footer-info-two">
					<p className='footer-text'>Privacy Policy </p>
					{/* <p className='footer-text'> Blog </p> */}
					<Link to="/contact"> <p className='footer-text'> Contact</p></Link>
				</div>

			</div>
		</footer>
	);
};

export default Footer;
