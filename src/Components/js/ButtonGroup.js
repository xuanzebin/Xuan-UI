import React, { Component } from 'react'
import '../scss/ButtonGroup.scss'
export default class XButtonGroup extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className={`x-button-group ${this.props.className}`}>
                { this.props.children }
            </div>
        )
    }
}