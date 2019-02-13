import React, { Component } from 'react'
import '../scss/Button.scss'
export default class Button extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return (
            <button className="x-button">{this.props.children}</button>
        )
    }
}