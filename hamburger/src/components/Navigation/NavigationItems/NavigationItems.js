import React from 'react'
import classes from './NavigationItems.module.css'

import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger</NavigationItem>
        <NavigationItem link="/bidon" active={false}>Checkout</NavigationItem>
    </ul>
)

export default NavigationItems 

