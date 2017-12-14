import React from 'react'

class Search extends React.PureComponent {

    state = {
        field: 'name',
        value: 'Husinec'
    }

    changeField = (e) => {
        this.setState({ field: e.target.value })
    }


    changeValue = (e) => {
        this.setState({ value: e.target.value })
    }

    submitForm = (e) =>  {
        e.preventDefault()
        fetch(`http://www.kontaktynaurady.cz/api/v1/organizations?${this.state.field}=*${this.state.value}*`)
        .then(response => {
            return response.json()

        }).then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input value={this.state.field} onChange={this.changeField} />
                <input value={this.state.value} onChange={this.changeValue} />
                <button>search</button>
            </form>
        )
    }
}


export default Search