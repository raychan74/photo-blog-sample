import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

NavButton.propTypes = {
	path: string.isRequired,
	label: string.isRequired
};

function NavButton({ path, label }) {
	return (
		<li>
			<Link to={path}>{label}</Link>
		</li>
	);
}

export default NavButton;
