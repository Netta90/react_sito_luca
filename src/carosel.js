import React from 'react';
import Prima from './successful.jpg';
import Seconda from './reflective.jpg';
import Terza from './success.jpg';
import Carousel from 'react-bootstrap/Carousel';

import './carousel.css';

class Carosel extends React.Component {
	render() {
		return (
			<Carousel >

				<Carousel.Item>
					<img
						className="d-block w-100 grandezza"
						src={Prima}
						alt="Third slide"
					/>
				on>


				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100 grandezza"
						src={Seconda}
						alt="Third slide"
					/>
					
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 grandezza"
						src={Terza}
						alt="Third slide"
					/>
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