import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DisplayBody extends Component {
	constructor() {
		super();
		this.state = {
			activePage: 1
		};
	}

	onClickBack = () => {
		if (this.state.activePage > 1) {
			this.setState(prevState => ({ activePage: prevState.activePage - 1}));
		}
	}

	onClickNext = () => {
		if (this.state.activePage < 5) {
			this.setState(prevState => ({ activePage: prevState.activePage + 1}));
		}
	}

	renderPhotos(baseURL, photos) {
		return photos.map(val => {
			return (
				<img
					className='display-image'
					key={val.uri}
					src={`${baseURL}/${val.uri}.jpg`}
				/>
			);
		});
	}

	renderPagination() {
		const { activePage } = this.state;

		return (
			<div className='display-pagination'>
				<Link
					to={`/page/${activePage > 1 ? activePage -1 : activePage}`}
					onClick={this.onClickBack}
				>
					{'<'}
				</Link>

				{/* TODO: additional logic for dynamic pagination, quick static data for now*/}
				{[1, 2, 3, 4, 5].map(val => {
					return (
						<Link
							className={val === activePage ? 'display-active' : ''}
							key={val}
							to={`/page/${val}`}
							onClick={() => this.setState({ activePage: val })}
						>
							{val}
						</Link>
					);
				})}

				<Link
					to={`/page/${activePage < 5 ? activePage + 1 : activePage}`}
					onClick={this.onClickNext}
				>
					{'>'}
				</Link>
			</div>
		);
	}

	render() {
		const photos = [
			{ uri: '1' },
			{ uri: '2' },
			{ uri: '3' },
			{ uri: '4' },
			// { uri: '5' },
			// { uri: '6' },
			// { uri: '7' },
			// { uri: '8' }
		];

		return (
			<div>
				<div className='display-image-container'>
					{this.renderPhotos('../../assets/images', photos)}
				</div>
				<div>
					{this.renderPagination()}
				</div>
			</div>
		);
	}
}
