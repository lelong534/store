import React from 'react';
import Title from './Title';
import {ProductConsumer} from '../context';
import Product from './Product';

export default class ProductList extends React.Component {
	state={
		products: []
	}

	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="products"/>
						<div className="row">
							<ProductConsumer>
								{(value) => {
									return value.products.map( product => {
										return <Product key={product.id} product={product} />;
									})
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
