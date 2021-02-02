import React from 'react';
import SearchForm from './SearchForm';
// import Location from './Location';
import ForecastDisplay from './ForecastDisplay';

export default class Forecast extends React.Component {

    render() {
        return (
            <div>
                <SearchForm fetchCityData={this.props.fetchCityData} />
                <ForecastDisplay forecastData={this.props.forecastData} />
            </div>
        )
    }


}