import React, { Component } from 'react'

export class Product extends Component {

    handleUpVote = () => {
        // this.props.onVote(this.props.id);

        const { onVote, id } = this.props;
        onVote(id);
    }
    handleDownVote = () => {
        // this.props.onVote(this.props.id);

        const { onUnvote, id } = this.props;
        onUnvote(id);
    }


    render() {
        const { id, title, description, url, votes, submitterAvatarUrl, productImageUrl } = this.props
        return (
            <div className='item'>
                <div className='image'>
                    <img src={productImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon' />
                        </a>
                        <a onClick={this.handleDownVote}>
                            <i className='large caret down icon' />
                        </a>
                        {votes}
                    </div>
                    <div className='description'>
                        <a>{title} </a>
                        <p> {description} </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by: </span>
                        <img className='ui avatar image' src={submitterAvatarUrl} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product