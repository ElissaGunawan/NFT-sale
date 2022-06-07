import React, { Component } from 'react'

export class Buy extends Component {
	render() {
		return (
			<div className="col-md-12">
				<h2>Get your own NFT now!</h2>
				<hr/>
				<div className="row">
				{ this.props.products && this.props.products.length > 0
					? this.props.products
					.sort((a,b) => { return b.id - a.id })
					.map((product, key) => {
					return(
						<div key={key} className="col-sm-2 mb-3">
							<div className="card text-white bg-black border border-white">
								<div className="card-body">
									<div className="row">
										<div><img src={product.imageurl} className="card-img-top" height="150"/></div>
										<div className="col-sm-12"><h4>{product.name}</h4></div>
										<div className="col-sm-7"><small>{product.description}</small></div>
										<div className="col-sm-5 text-end">
											<span className="font-weight-bold">{window.web3.utils.fromWei(product.price.toString(), 'Ether')} ETH</span>
										</div>
									</div>
									<hr />
									<small><b>{!product.purchased ? 'Owner' : 'Purchased by'} :</b> {product.owner}</small><br/>
								</div>
								<div className="card-footer bg-transparent">
									{ !product.purchased && product.owner !== this.props.account ?
										<button 
											className="btn btn-warning float-right font-weight-bold" 
											style={{width: '75px'}}
											name={product.id}
											value={product.price}
											onClick={(event) => {
												this.props.purchaseProduct(event.target.name, event.target.value)
											}}
											>Buy</button>
										: product.owner === this.props.account ? <button className="btn btn-light float-right font-weight-bold" disabled style={{minWidth: '75px'}}>Your product</button> : <button className="btn btn-secondary float-right font-weight-bold" disabled style={{minWidth: '75px'}}>Purchased</button>
									}
								</div>
							</div>
						</div>
						)
					})
					: <div>No products for sale yet.</div>
				}
				</div>
			</div>
		)
	}
}

export default Buy
