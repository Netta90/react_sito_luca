import React from 'react';
import './Topbar.css';
import Logo from './NuovoLucs.png';


class TopBar extends React.Component {
	render() {
		return (
			<div className=" navbar navbar-expand-md navbar-dark fixed-top bg-dark">

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<img className="logo" src={Logo} />
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home</a>
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