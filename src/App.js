import React, { Component } from 'react';
import './App.css';
import Results from  './Results'
import Search from  './Search'


class App extends Component {

    state = {
        results: []
    }

    updateResults = (data) => {
        this.setState({ results:data})
    }

  render() {
    return (
      <div className="App">
        <Search updateResults={this.updateResults} />
        <Results data={this.state.results} />
      </div>
    );
  }
}

export default App;
