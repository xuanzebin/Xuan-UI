import React, { Component } from 'react'
import '../scss/Button.scss'
import PropTypes from 'prop-types'
import Xicon from './Icon'
export default class Xbutton extends Component {
    static defaultProps = {
        iconPosition: 'left'
    }
    constructor() {
        super()
        this.state={}
    }
    render() {
        return (
            <button className={`x-button ${this.props.iconPosition}`}>
                <Xicon name={this.props.icon}/>
                <div className="content">
                    {this.props.children}
                </div> 
            </button>
        )
    }
}

Xbutton.propTypes = {
    iconPosition: PropTypes.oneOf(['left', 'right'])
}