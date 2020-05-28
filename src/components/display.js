import React, { Component } from 'react';
import axios from 'axios';
import Article from './article';

class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
		};
	}

	componentDidMount() {
		this.getArticles(this.props.default);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps !== this.props) {
			this.setState({
				url: `https://newsapi.org/v2/top-headlines?country=${nextProps.default}&apiKey=c8f5d18513c74b60bbed9d619cdbb20d`,
			});
			this.getArticles(nextProps.default);
		}
	}

	getArticles(url) {
		this.setState({ articles: [] });
		const API = 'c8f5d18513c74b60bbed9d619cdbb20d';
		axios
			.get(`https://newsapi.org/v2/top-headlines?country=${url}&apiKey=${API}`)
			.then((response) => {
				const data = response.data.articles;
				console.log(data);
				this.setState({ articles: data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		const articleState = this.state.articles;
		let views = <div>Loading...</div>;
		if (articleState && articleState.length > 1) {
			views = Object.keys(articleState).map((article) => (
				<Article key={article} details={articleState[article]} />
			));
		}
		return (
			<div className='container'>
				<div className='row'>
					<br />
					<br />
					{views}
				</div>
			</div>
		);
	}
}

export default Display;
