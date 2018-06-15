import React, { Component } from 'react';

import NavButton from './NavButton';

export default class NavBar extends Component {
	renderNavButton(buttonName) {
		return buttonName.map(val => {
			return (
				<NavButton
					key={val}
					label={val}
					path={`/${val === 'Home' ? '' : val.toLowerCase()}`}
				/>
			);
		});
	}

	render() {
		const buttonName = ['Home', 'Blogs', 'Photos', 'About', 'Contact', 'page/1'];

		return (
			<nav>
				<ul className='navbar-list'>
					{this.renderNavButton(buttonName)}
				</ul>
			</nav>
		);
	}
}
