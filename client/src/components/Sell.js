import React, { Component } from 'react'

export class Sell extends Component { 
	render() {
		return (
			<div className="col-md-12">
				<div className="col-md-4">
					<h2>Mint and List your NFT</h2>
					<form
						onSubmit={(event) => {
							event.preventDefault()
							const name = this.productName.value
							const description = this.productDescription.value
							const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
							const imageurl = this.productImage.value
							this.props.createProduct(name, description, imageurl, price)
						}}>

						<div className="form-group mr-sm-2">
							<label htmlFor="productName">Product Name</label>
							<input
							id="productName"
							type="text"
							ref={(input) => { this.productName = input }}
							className="form-control"
							placeholder=""
							required />
						</div>
						<br/>
						<div className="form-group mr-sm-2">
							<label htmlFor="productName">Product Description</label>
							<input
							id="productDescription"
							type="text"
							ref={(input) => { this.productDescription = input }}
							className="form-control"
							placeholder=""
							required />
						</div>
						<br/>
						<div className="form-group mr-sm-2">
							<label htmlFor="productPrice">Product Price</label>
							<input
							id="productPrice"
							type="text"
							ref={(input) => { this.productPrice = input }}
							className="form-control"
							placeholder=""
							required />
						</div>
						<br/>
						<div className="form-group mr-sm-2">
							<label htmlFor="productPrice">Product Image URL</label>
							<input
							id="productImage"
							type="text"
							ref={(input) => { this.productImage = input }}
							className="form-control"
							placeholder=""
							required />
						</div>
						<br/>
						<button type="submit" className="btn btn-success">Submit</button>
					</form>
				</div>
				<hr className="my-4"/>
				<h5>Your Products</h5>
				<table className="table table-bordered text-white">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Description</th>
							<th scope="col">Price</th>
							<th scope='col' width="220">Image</th>
						</tr>
					</thead>
					<tbody>
						{this.props.products.filter(p => p.owner === this.props.account).length > 0
							? this.props.products
								.filter(p => p.owner === this.props.account)
								.map((product, key) => {
								return (
									<tr key={key}>
										<th scope="row">{key+1}</th>
										<td>{product.name}</td>
										<td>{product.description}</td>
										<td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} ETH</td>
										<td><img src={product.imageurl} width="200" height="200"/></td>
									</tr>
								)
								})
							: <tr><td colSpan="5" className="text-center">You not have any products yet.</td></tr>
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Sell
