import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './carousel.css';

class Carosel extends React.Component {
	render() {
		return (
			<Carousel className="misuraCarosel">

				<Carousel.Item>
					<div
						className="d-block w-100 prima">
					</div>




				</Carousel.Item>

				<Carousel.Item>
				
					<div
						className="d-block w-100 seconda">
					</div>


				</Carousel.Item>
				<Carousel.Item>
				
					<div
						className="d-block w-100 terza">
					</div>

					
					<Carousel.Item>
						<label>

						</label>
					</Carousel.Item>


				</Carousel.Item>
			</Carousel>


		);
	}
}

export default Carosel;