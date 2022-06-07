import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light shadow ps-3 bg-info">
				<Link
					className="navbar-brand"
					to="/"
					rel="noopener noreferrer"
				>
					<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/NFT_Icon.png/480px-NFT_Icon.png' width="30" height="30" />
					NoiFT
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className={this.props.active === 'buy' ? 'nav-item active' : 'nav-item'}>
							<Link className="nav-link text-dark" to="/buy"><b>Buy NFT</b></Link>
						</li>
						<li className={this.props.active === 'sell' ? 'nav-item active' : 'nav-item'}>
							<Link className="nav-link text-dark" to="/sell"><b>Sell NFT</b></Link>
						</li>
					</ul>
					<div className="d-flex flex-column ms-auto me-3">
						<small className="nav-link text-dark p-0 text-end"><span id="account">Your current account: <b>{this.props.account}</b></span></small>
						<small className="nav-link text-dark p-0 text-end"><span id="account">Your current balance: <b>{this.props.balance} ETH</b></span></small>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
