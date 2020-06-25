import React from 'react';
import './TopbarNew.css';
import Logo from './falchi_logo.png';

class TopbarNew extends React.Component {
    render() {
        return (
            <div className="topbar-container">
                <div className="topbar-high-container">

                </div>
                <div className="topbar-low-container">
                    <div className="row">
                        <div className="col-md-5 menu left-menu">
                            <ul>
                                <li>Home</li>
                                <li>Chi sono?</li>
                            </ul>
                        </div>
                        <div className="col-md-2 center-logo">
                            <div className="logo-container">
                                <img src={Logo} />
                            </div>
                        </div>
                        <div className="col-md-5 menu right-menu">
                            <ul>
                                <li>PNL</li>
                                <li>Contatti</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopbarNew;