import React from 'react';
import './Topbar.css';
import Logo from './FF.png';


class TopBar extends React.Component {
	render() {
		return (
			<div className="header-backround-trasparent">
				<header className="color-header">
					<div className="header-backround"></div>
					<div className="header-container">

						<div className="header-containerinte-clearfix">
							<div className="logo">
								<div className="logo-iner"><img  className="logo"src={Logo}/>
								</div>
							</div>
							<div className="second-header">
								<div className="main-menu">
									<ul className="menu-principale">
										<li className="menu"> 
											<a>Home</a></li>
										<li className="menu">
											<a>Offerte</a></li>
										<li className="menu">
											<a>Tour</a></li>
										<li className="menu">
											<a>Incoming</a></li>
										<li className="menu">
											<a>Servizi</a></li>
										<li className="menu">
											<a>Contatti</a></li>
										<li className="menu">
											<a>Preventivi</a></li>
									</ul>
									<div className="slide-bar"></div>
								</div>
							</div>

						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default TopBar;