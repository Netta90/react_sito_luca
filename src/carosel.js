import React from 'react';
import Prima from './prima.png';
import Seconda from './seconda.png';
import Terza from './terza.png';
import Carousel from 'react-bootstrap/Carousel';

class Carosel extends React.Component {
	render() {
		return(
			<Carousel>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={Prima}
			      alt="First slide"
			    />
		       <Carousel.Caption>
			      <h3>First slide label</h3>
			      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={Seconda}
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>Second slide label</h3>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={Terza}
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>Third slide label</h3>
			      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
			

		);
	}
}

export default Carosel;