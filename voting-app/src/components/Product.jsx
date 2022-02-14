import React, { Component } from 'react'

export class Product extends Component {
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                        <a>{this.props.title} </a>
                        <p> {this.props.description} </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by: </span>
                        <img className='ui avatar image' src={this.props.submitterAvatarUrl} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product