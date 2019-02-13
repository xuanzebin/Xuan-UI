import React, { Component } from 'react'
import '../scss/Icon.scss'
export default class Xicon extends Component {
    constructor() {
        super()
        this.state={}
    }
    render() {
        return (
            this.props.name?
            <svg className={`x-icon ${this.props.className}`} aria-hidden="true">
                <use xlinkHref={`#i-${this.props.name}`}></use>
            </svg>:''
        )
    }
}