import React from 'react';
import './App.css

import Carosel from './carosel';
import Content from './content';
import Footer from './Footer';
import './Footer.css';
import './Topbar.css';
import { useMediaQuery } from 'react-responsive';

class App extends React.Component {

	render() {
	
	return (
			<div className='app'>
            <TopbarNew/>
			<Carosel/>
			<Content/>
			<Footer/>
			</div>
		);

	}
}

export default App;