import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {

	render() {
		return (
			<div id="content" className="col-md-12 d-flex justify-content-center text-center align-items-center">
				<div className="col-md-4 d-flex flex-column">
					<h2>Welcome to NoiFT!</h2>
					<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/NFT_Icon.png/480px-NFT_Icon.png' className='rounded mx-auto d-block' width="200" height="200" />
					<Link to="/sell"><button className="btn btn-outline-info btn-lg mt-4">Create and sell your NFT!</button></Link><br/>
					<h4>or</h4>
					<Link to="/buy"><button className="btn btn-outline-info btn-lg mt-4">Buy your own NFT!</button></Link>
				</div>
			</div>
		);
	}
}

export default Main;
