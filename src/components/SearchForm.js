import React from "react"

export default class SearchForm extends React.Component {
    state = {input: ""}

    handleChange = (e) => {
        this.setState({input: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        
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