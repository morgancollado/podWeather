import React, { Component } from 'react'

export default class ForecastDisplay extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.forecastData.name}</h1>
                <h3>{this.props.forecastData.temp}</h3>
                <h4>{this.props.forecastData.description}</h4>
                <p>Humidity: {this.props.forecastData.humidity}</p>
                <p>Windspeed: {this.props.forecastData.windspeed} mhp</p>
            </div>
        )
    }
}
