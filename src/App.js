import React from 'react';
import TopbarNew from './top-bar';
import './App.css';
import Carosel from './carosel';
import CarouselCustom from './Carousel';
import Content from './content';
import Footer from './Footer';
import './Footer.css';
import './App.css';


class App extends React.Component {

	render() {
	
	return (
			<div className='app'>
            <TopbarNew/>
			<CarouselCustom/>
			<Content/>
			<Footer/>
			</div>
		);

	}
}

export default App;