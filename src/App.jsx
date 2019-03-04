import React, { Component } from 'react';

import SearchBar from './components/Searchbar/SearchBarComponent';
import QueryHistory from './components/QueryHistory/QueryHistoryComponents'
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchBar />
        <QueryHistory />
      </div>
    );
  }
}


export default App;
