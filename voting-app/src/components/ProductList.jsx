// rce é o snippet para esta estrutura de component

import React, { Component } from 'react'
import Product from './Product'
import { products } from '../seeds'

export class ProductList extends Component {
    render() {

        const product = products[0];
        console.log(product);

        return (
            <div className='ui unstackable items'>
                <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
            </div>
        )
    }
}

export default ProductList