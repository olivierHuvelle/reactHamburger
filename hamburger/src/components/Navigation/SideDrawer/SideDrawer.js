import React from 'react'
import PropTypes from 'prop-types'
import classes from './SideDrawer.module.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

import Aux from '../../../hoc/Aux'

/*
    Required props 
    hide : func (has to return true or false) 
*/

const SideDrawer = props => {
    const currentClass = props.visible ? classes.Open : classes.Close

    return(
        <Aux>
            <Backdrop hide={props.hide} visible={props.visible}/>
            <div className={[classes.SideDrawer, currentClass].join(' ')}>
                <Logo/> 
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    ) 
}

SideDrawer.propTypes = {
    visible : PropTypes.bool, 
    hide : PropTypes.func
}

export default SideDrawer