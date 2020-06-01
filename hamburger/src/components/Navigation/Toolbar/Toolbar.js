import React from 'react'
import PropTypes from 'prop-types'
import classes from './Toolbar.module.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

//DrawerToggle

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggle toggled={props.toggled}/>
        <Logo className={classes.DesktopOnly}/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)


Toolbar.propTypes = {
    toggled : PropTypes.func, 
}

export default Toolbar 