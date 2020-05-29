import React from 'react'
import Aux from '../../hoc/Aux'

import classes from './Layout.module.css'

const Layout = props => (
    <Aux>
        <header>
            Here some stuff 
        </header>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default Layout