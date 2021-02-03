import React, { Component } from 'react';
import Forecast from '../components/Forecast';
import Sidebar from '../components/Sidebar'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
    constructor() {
        super()
        this.state = {
            locationData: {
                name: "",
                humidity: "",
                description: "",
                temp: "",
                windspeed: ""
            }, 
            cities: []
        }
    }


    fetchCityData = (query = "atlanta") => {
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${query}`, {
            "headers": {
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    locationData: {
                        name: data.name,
                        humidity: data.main.humidity,
                        description: data.weather[0].description,
                        temp: data.main.temp,
                        windspeed: data.wind.speed
                    }
                })
            })
            .catch(err => console.error(err.message));
    }

    componentDidMount() {
        this.fetchCityData()
        this.fetchSideBarData()
    }

    fetchSideBarData(){
        fetch("http://localhost:3000/cities")
        .then(r => r.json())
        .then(data => {
            this.setState({
                cities: data
            })
        })
    }



    render() {
        return (
            <div>
                <Forecast fetchCityData={this.fetchCityData} forecastData={this.state.locationData} />
                <Sidebar cities={this.state.cities}/>
            </div>
        )
    }

}

export default Main