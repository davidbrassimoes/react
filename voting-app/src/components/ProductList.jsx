// rce é o snippet para esta estrutura de component

import React, { Component } from 'react'
import Product from './Product'
import { products } from '../seeds'

export class ProductList extends Component {

    state = {
        products: [],
        descending: true,
    }

    toggleSort = () => {
        this.setState({
            descending: !this.state.descending
        })
    }

    handleProductUpVote = (productId) => {
        console.log(`Foi votado o produto com id: ${productId}`);

        const nextProducts = this.state.products.map(
            p => {
                if (p.id === productId) {
                    return { ...p, votes: p.votes + 1 }
                } else {
                    return p;
                }
            }
        )

        this.setState({ products: nextProducts })

        /*     products.forEach((p) => {
                if (p.id === productId) {
                    p.votes += 1;
                }
            }) */

    }
    handleProductDownVote = (productId) => {
        console.log(`Foi votado o produto com id: ${productId}`);

        const nextProducts = this.state.products.map(
            p => {
                if (p.id === productId) {
                    return { ...p, votes: p.votes - 1 }
                } else {
                    return p;
                }
            }
        )

        this.setState({ products: nextProducts })

        /*     products.forEach((p) => {
                if (p.id === productId) {
                    p.votes += 1;
                }
            }) */

    }

    componentDidMount() {
        this.setState({ products })
    }


    render() {

        const sortedProducts = this.state.products.sort((a, b) => this.state.descending ? (b.votes - a.votes) : (a.votes - b.votes))

        const productComponents = sortedProducts.map((p, index) => (

            <Product
                key2={index}
                key={'productID-' + p.id}
                id={p.id}
                title={p.title}
                description={p.description}
                url={p.url}
                votes={p.votes}
                submitterAvatarUrl={p.submitterAvatarUrl}
                productImageUrl={p.productImageUrl}

                onVote={this.handleProductUpVote}
                onUnvote={this.handleProductDownVote}
            />
        ))

        // const { id, title, description, url, votes, submitterAvatarUrl, productImageUrl } = products[0];
        // const product = products[0];
        // console.log(product);


        return (
            <div className='ui unstackable items'>
                <button onClick={this.toggleSort} >
                    up / down
                </button>
                {productComponents}
            </div>
        )
    }
}

export default ProductList