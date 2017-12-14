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

    render() {
        return (
            <div>
                <input value={this.state.field} onChange={this.changeField} />
                <input value={this.state.value} onChange={this.changeValue} />
                <button>search</button>
            </div>
        )
    }
}


export default Search