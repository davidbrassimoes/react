import React, { Component } from 'react'

export default class ClassComp extends Component {

    state = {
        textName: ""
    }


    textChange = (e) => {
        this.setState({
            textName: e.target.value,
        })
    }

    render() {
        return (
            <>
                <h2>O meu nome é: {this.state.textName} </h2>
                <input type="text" value={this.state.textName} onChange={this.textChange} />
            </>
        )
    }
}

