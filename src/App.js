import React, { Component } from 'react';
import './App.css';
import Xbutton from './Components/js/Button'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Xbutton icon="setting" iconPosition="left">按钮</Xbutton>
        <Xbutton icon="setting" iconPosition="right">按钮</Xbutton>
        <Xbutton>按钮</Xbutton>
      </div>
    );
  }
}

export default App;
