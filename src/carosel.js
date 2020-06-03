import React from 'react';

class Carosel extends React.Component {
	render() {
		return(
			<div className = 'carousel'>
				<ul className = 'carousel-indicator'>
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ul>
				<div class="carousel-inner">
	    			<div class="item active">
	      				<img src="" alt="" />
	    			</div>

		    		<div class="item">
		      			<img src="" alt=""/>
					</div>
				</div>
			</div>
			

		)
	}
}

export default Carosel;