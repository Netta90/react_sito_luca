import React from 'react';
import './Topbar.css';
import Logo from './NuovoLucs.png';

class TopBar extends React.Component {
	render() {
		return(
			<header className="app-header">
				<img src={Logo} className="app-logo" alt="logo" />
	            <div className="box_topbar">
	                <div>
	                  <a className= 'topbar-content' href="imieicorsi"> I miei corsi</a>
	                </div>
	                <div>
	                  <a className= 'topbar-content' href="#contatti">Contatti</a>
	                </div>
	                <div>
	                  <a className= 'topbar-content' href="#PNL">PNL</a>
	                </div>
	            </div>   
            </header>
		);
	}
}

export default TopBar;