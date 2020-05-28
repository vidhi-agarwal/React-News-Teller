import React from 'react';
import news from './images/news.png';
import Select from './components/select';
import './App.css';
import Footer from './components/footer';
import Timer from './components/timer';

function App() {
	return (
		<div className='app'>
			<div className='appHeader'>
				<img className='appLogo' src={news} alt='News Logo' />

				<div className='title'>
					<h1>News Avenue</h1>
				</div>

				<div className='timerDisplay'>
					<Timer />
				</div>
			</div>
			<h1>Select your desired country!</h1>
			<Select />
			<Footer />
		</div>
	);
}

export default App;
