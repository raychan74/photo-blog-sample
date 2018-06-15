import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<div className='landing-page'>
			<Link className='landing-page-title' to='/page/1'>
				Explore The Nature
			</Link>
		</div>
	);
};

export default LandingPage;
