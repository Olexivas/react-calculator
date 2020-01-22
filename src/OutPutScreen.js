import React, { Component } from 'react'

export class OutPutScreen extends Component {
    render() {
        return (
            <div id="display">
                {this.props.children}
            </div>
        )
    }
}

export default OutPutScreen
