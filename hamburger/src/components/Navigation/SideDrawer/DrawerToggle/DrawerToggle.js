import React from 'react'
import PropTypes from 'prop-types'
import classes from './DrawerToggle.module.css'


const DrawerToggle = props => {
    return(
        <div className={classes.DrawerToggle} onClick={() => {props.toggled()}}>
           <div></div>
           <div></div>
           <div></div>
        </div> //vérifier le nom boh sinon pas intéret juste du css on ne peut plus basique 
    )
}

DrawerToggle.propTypes = {
    toggled : PropTypes.func
}

export default DrawerToggle

