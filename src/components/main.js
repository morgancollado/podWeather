import React, { Component}from 'react'
import SearchForm from './SearchForm'

const APIKey = "WvUwWbW91AkhPDWcHrpkaemhgEgqTOcY"
const URL = `https://data.climacell.co/v4/insights?apikey=${APIKey}`

class Main extends Component {
    constructor() {
        super()
        this.state ={
            location:""
        }
    }
 

     fetchCityData=(query= "atlanta")=>{
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${query}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "b7a95e097emsh26a2d1fba9ebe7bp18881djsn1851aa1d01f8",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => console.log(response))
    }

    componentDidMount(){     
        this.fetchCityData()
    }

    render() {
        return (
            <div>
                <SearchForm fetchCityData = {this.fetchCityData}/>
            </div>
        )
    }

}

export default Main