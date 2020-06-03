import React from 'react';
import './Topbar.css';

class TopBar extends React.Component {
	render() {
		return(
			<div className="topbar">
	            <ul>
	                <li>
	                  <a href="imieicorsi"> I miei corsi</a>
	                </li>
	                <li>
	                  <a href="#contatti">Contatti</a>
	                </li>
	                <li>
	                  <a href="#contatti">PNL</a>
	                </li>
	            </ul>   
            </div>
		);
	}
}

export default TopBar;