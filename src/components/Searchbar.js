import React from "react"
import Forecast from "./Forecast"
import SearchForm from './SearchForm'

export default class SearchBar extends React.Component {

    render() {
        return(
            <div>
                <SearchForm />
                <Forecast />
                
            </div>
        )
    }
}