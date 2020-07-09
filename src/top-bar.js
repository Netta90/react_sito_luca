import React from 'react';
import Logo from './NuovoLucs.png';
import './top-bar.css';



class TopBar extends React.Component {
	render() {
		return (
			<div className=" navbar navbar-expand-md navbar-dark fixed-top bg-dark-new">
				<div className="box-logo">
					<div className="misure-box">
						<img className="logo" src={Logo} />
					</div>
				</div>
				<div className="collapse navbar-collapse border-boxTwo" id="navbarCollapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home</a>
						</li>  
						<li className="nav-item">
							<a className="nav-link" href="#">informazioni</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Contatti</a>
						</li>


					</ul>
				</div>
			</div>


		);
	}
}
export default TopBar;