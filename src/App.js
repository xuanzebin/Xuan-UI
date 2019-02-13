import React, { Component } from 'react';
import './App.css';
import Button from './Components/js/Button'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button icon="setting" iconPosition="left">按钮</Button>
        <Button icon="setting" iconPosition="right">按钮</Button>
        <Button icon="setting">按钮</Button>
      </div>
    );
  }
}

export default App;
