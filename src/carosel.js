import React from 'react';
import Prima from './prima.png';
import Seconda from './seconda.png';
import Terza from './terza.png';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
   
class Carosel extends React.Component {
	render() {
		return(
			<Carousel>
			  <Carousel.Item className = {}>
			    <img
			      className="d-block w-100"
			      src={Prima}
			      alt="First slide"
			    />
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={Seconda}
			      alt="Third slide"
			    />

			   
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={Terza}
				  alt="Third slide"
			    />
				 <Carousel.Item>
				 <label>
					<h3>Vivi libero da restrizioni</h3>
				</label>
				</Carousel.Item>

			    <Carousel.Caption>
				<label>
					<h3>Vivi libero da restrizioni</h3>
				</label>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
			

		);
	}
}

export default Carosel;