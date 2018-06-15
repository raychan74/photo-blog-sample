import React, { Component } from 'react';

export default class DisplayBody extends Component {
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

	render() {
		const photos = [
			{ uri: '1' },
			{ uri: '2' },
			{ uri: '3' },
			{ uri: '4' },
			{ uri: '5' },
			{ uri: '6' },
			{ uri: '7' },
			{ uri: '8' }
		];

		return (
			<div>
				<div className='display-image-container'>
					{this.renderPhotos('../../assets/images', photos)}
				</div>
				<div>
					Pagination
				</div>
			</div>
		);
	}
}
