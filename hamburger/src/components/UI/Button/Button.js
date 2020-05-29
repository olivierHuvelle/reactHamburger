import React from 'react'
import classes from './Button.module.css'

/*
    Required props 
    -> type : String (class name) Danger || Success
    -> click : func
*/

const Button = props => <button className={[classes.Button, classes[props.type]].join(' ')} onClick={props.click}>{props.children}</button>

export default Button