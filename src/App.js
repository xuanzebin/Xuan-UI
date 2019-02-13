import React, { Component } from 'react';
import './App.css';
import Xbutton from './Components/js/Button'
class App extends Component {
  constructor(){
    super()
    this.state = {
      loading:true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <div className="App">
        <Xbutton icon="setting" iconPosition="left">按钮</Xbutton>
        <Xbutton icon="setting" iconPosition="right" loading={this.state.loading} onClick={this.handleClick}>按钮</Xbutton>
        <Xbutton>按钮</Xbutton>
      </div>
    );
  }
  handleClick(){
    console.log(1)
    this.setState({
      loading:!this.state.loading
    })
  }
}

export default App;
