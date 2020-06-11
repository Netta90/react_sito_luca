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

			  <Carousel.Item>
			    <div			      
			    className="d-block w-100 FotoLuca"
			      alt="First slide">

		       <Carousel.Caption className="message prima">
			     <div className="borderbuttom">Falchi Luca </div>
			     <div>PNL Coaching </div>

	        		
		    			
			    </Carousel.Caption>
			   </div>

			  </Carousel.Item>

			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={Seconda}
			      alt="Third slide"
			    />
			    <Carousel.Caption>
			      <h3 className="message seconda">Vivi libero da restrizioni</h3>
			    </Carousel.Caption>
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

				 	<h3 className="message terza">I risultati sono come un eco:
	    			Se non ti piace quello che arriva devi cambiare quello che invii.</h3>

			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
			

		);
	}
}

export default Carosel;