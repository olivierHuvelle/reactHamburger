import React from 'react'
import classes from './Toolbar.module.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo className={classes.DesktopOnly}/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default Toolbar 