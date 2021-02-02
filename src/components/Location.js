import React from "react"

export default class Location extends React.Component {
    constructor(props) {
        super()
        this.state = {
            airQuality: "",
            humidity: "",
            moonPhase: "",
            precipitationDate: "",
            temp: "",
            windspeed: ""
        }
    }

    render() {
        console.log(this.props.forecastData)
        return (
            <div>
            </div>
        )
    }
}