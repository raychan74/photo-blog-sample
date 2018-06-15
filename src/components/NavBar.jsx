import React, { Component } from 'react';

import NavButton from './NavButton';

export default class NavBar extends Component {
	renderNavButton(buttonName) {
		return buttonName.map(val => {
			return (
				<NavButton
					key={val}
					label={val}
					path={val.toLowerCase()}
				/>
			);
		});
	}

	render() {
		const buttonName = ['Home', 'Blogs', 'Photos', 'About', 'Contact'];

		return (
			<nav>
				<ul>
					{this.renderNavButton(buttonName)}
				</ul>
			</nav>
		);
	}
}
