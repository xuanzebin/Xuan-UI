import React, { Component } from 'react'
import '../scss/Button.scss'
import PropTypes from 'prop-types'
export default class Button extends Component {
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
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref={`#i-${this.props.icon}`}></use>
                </svg>
                <div className="content">
                    {this.props.children}
                </div>
            </button>
        )
    }
}

Button.propTypes = {
    iconPosition: PropTypes.oneOf(['left', 'right'])
}