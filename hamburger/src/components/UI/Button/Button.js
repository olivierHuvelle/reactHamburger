import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.css'

/*
    Required props 
    -> type : String (class name) Danger || Success
    -> click : func
*/

const Button = props => 
    <button 
            className={[classes.Button, classes[props.type]].join(' ')} 
            onClick={props.click}
            disabled={props.disabled}
    >
        {props.children}
    </button>

export default Button

Button.propTypes = {
    type : PropTypes.string, 
    click : PropTypes.func, 
    disabled : PropTypes.bool
}


