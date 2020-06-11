import React from 'react';
import './App.css';
import TopBar from './top-bar';
import Carosel from './carosel';
import Content from './content';
import './Topbar.css';

class App extends React.Component {

	render() {
	
	return (
			<div className='app'>
			<TopBar/>
			<Carosel/>
			<Content/>
			</div>
		);

	}
}

export default App;