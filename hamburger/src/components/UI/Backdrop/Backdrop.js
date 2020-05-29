import React from 'react'
import classes from './Backdrop.module.css'

/*
    Required props 
    -> visible (boolean) if true -> displays the backdrop 
    -> hide (function) on click send true to parent ---> visible from true to false 
*/

const Backdrop = props => {
    const backdropElement = props.visible ? <div className={classes.Backdrop} onClick={()=>{props.hide(true)}}></div> : null 
    return backdropElement
}

export default Backdrop


