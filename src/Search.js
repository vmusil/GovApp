import React from 'react'

class Search extends React.PureComponent{

    render(){
        return (
            <div>
            <input value="name" />
            <input value="Praha 3"/>
            <button>search</button>
            </div>
        )
    }
}


export default Search