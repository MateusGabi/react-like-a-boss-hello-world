import './App.css';

import React, { Component } from 'react';

import ProductsList from './ProductList';
import Search from './Search';

class App extends Component {
	render() {
		return (
			<div>
				<Search />
				<ProductsList />
			</div>
		);
	}
}

export default App;
