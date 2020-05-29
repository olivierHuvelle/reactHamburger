import React from 'react'
import classes from './Layout.module.css'

import Aux from '../../hoc/Aux'


const Layout = props => (
    <Aux>
        <header>
            Here some stuff 
        </header>
        <main className={classes.Main}>
            {props.children}
        </main>
    </Aux>
)

export default Layout