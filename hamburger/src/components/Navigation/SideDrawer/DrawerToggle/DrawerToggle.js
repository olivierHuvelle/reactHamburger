import React from 'react'
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

export default DrawerToggle