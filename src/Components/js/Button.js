import React, { Component } from 'react'
import '../scss/Button.scss'
import PropTypes from 'prop-types'
import XIcon from './Icon'
export default class XButton extends Component {
    static defaultProps = {
        iconPosition: 'left',
        loading:false
    }
    constructor() {
        super()
        this.state={}
    }
    render() {
        return (
            <button className={`x-button ${this.props.className} ${this.props.iconPosition}`} onClick={this.props.onClick}>
                {
                    this.props.loading?
                    <XIcon className="loading" name="loading"/>:
                    <XIcon name={this.props.icon}/>
                }
                <div className="content">
                    {this.props.children}
                </div> 
            </button>
        )
    }
}

XButton.propTypes = {
    iconPosition: PropTypes.oneOf(['left', 'right']),
    loading: PropTypes.bool
}