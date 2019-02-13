import React, { Component } from 'react';
import './App.css';
import XButton from './Components/js/Button'
import XButtonGroup from './Components/js/ButtonGroup'
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
        <div className="box">
          <XButton icon="setting" iconPosition="left">按钮</XButton>
          <XButton icon="setting" iconPosition="right" loading={this.state.loading} onClick={this.handleClick}>按钮</XButton>
          <XButton>按钮</XButton>
        </div>
        <XButtonGroup>
          <XButton icon="left" iconPosition="left">按钮</XButton>
          <XButton>按钮</XButton>
          <XButton icon="right" iconPosition="right">按钮</XButton>
        </XButtonGroup>
      </div>
    );
  }
  handleClick(){
    this.setState({
      loading:!this.state.loading
    })
  }
}

export default App;
