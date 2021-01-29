import React from "react"

export default class SearchForm extends React.Component {
    state = {input: ""}

    handleChange = (e) => {
        this.setState({input: e.target.value})
        console.log(this.state.input)
        console.log(this.props)
    }

    handleSubmit = (e) => {
        e.preventDefault()   
        this.props.fetchCityData(this.state.input)  
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" value={this.state.input}/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}