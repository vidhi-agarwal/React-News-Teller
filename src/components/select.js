import React, { Component } from 'react';

import Display from './display';

class Select extends Component {
	constructor(props) {
		// Pass props to parent class
		super(props);
		this.state = {
			data: [],
			value: this.props.default,
		};
		this.onChange = this.onChange.bind(this);
		this.apiUrl =
			'https://newsapi.org/v2/sources?language=en&apiKey=c8f5d18513c74b60bbed9d619cdbb20d';
	}
	onChange(event) {
		this.setState({ value: event.target.value });
		console.log(this.state.value);
	}

	componentDidMount() {
		let countries = [
			{ id: 1, name: 'India', value: 'in' },
			{ id: 2, name: 'Russia', value: 'ru' },
			{ id: 3, name: 'USA', value: 'us' },
			{ id: 4, name: 'Australia', value: 'au' },
			{ id: 5, name: 'Japan', value: 'jp' },
		];
		this.setState({ data: countries });
		console.log(this.state.data);
	}

	render() {
		const allcountries = this.state.data;
		return (
			<div>
				<div className='row text-center'>
					<div className='col-lg-12'>
						<select value={this.state.value} onChange={this.onChange}>
							{Object.keys(allcountries).map((countries) => (
								<option key={countries} value={allcountries[countries].value}>
									{allcountries[countries].name}
								</option>
							))}
						</select>
					</div>
				</div>
				<br />
				<div className='row'>
					<br />
					<Display default={this.state.value} />
				</div>
			</div>
		);
	}
}

export default Select;
