import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetLocalData from './components/LocalData/GetLocalData';
class App extends Component {
  render() {
    return (
        <div className="App">
          <GetLocalData/>
        </div>
    );
  }
}
export default App;