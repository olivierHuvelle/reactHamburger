import React from 'react'

const DrawerToggle = props => {
    return(
        <div onClick={() => {props.toggled()}}>Menu</div> //vérifier le nom 
    )
}

export default DrawerToggle