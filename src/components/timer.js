import React, { Component } from 'react';

class Timer extends Component {
	constructor() {
		super();
		this.state = { time: new Date() };
	}

	currentTime() {
		this.setState({
			time: new Date(),
		});
	}

	componentWillMount() {
		setInterval(() => this.currentTime(), 1000);
	}
	render() {
		return <h3>{this.state.time.toLocaleTimeString()}</h3>;
	}
}

export default Timer;
