import React, { Component } from 'react'


export default class City extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.city}</h3>
            </div>
        )
    }
}
