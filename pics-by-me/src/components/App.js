import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

	state = {
		results: [],
	};

	onSearchSubmit = async (term) => {
		const response = await Axios.get('https://api.unsplash.com/search/photos', {
			params: {
				query: term,
			},
			headers: {
				Authorization: 'Client-ID 3ec659946d8b490bd653db64de6ad5c4c4e319c11a8bb68ce7005ba615da4835',
			}
		});

		this.setState({ results: response.data.results })
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.results} />
			</div>
		);
	}
}

export default App;