import React, { Component } from 'react';
import './App.css';
import Results from  './Results'
import Search from  './Search'


class App extends Component {
  render() {
    return (
      <div className="App">
<Search/>
<Results/>
      </div>
    );
  }
}

export default App;
