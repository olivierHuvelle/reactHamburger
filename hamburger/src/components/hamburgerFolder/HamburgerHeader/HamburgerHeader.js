import React from 'react'
import PropTypes from 'prop-types'
import classes from './HamburgerHeader.module.css'

/*
    Required props : 
        price : Number 
*/

const HamburgerHeader = props => (
    <section className={classes.Header}>
        <h2>Votre hamburger</h2>
        <p>Prix total : {props.price} $</p>
    </section>
)

HamburgerHeader.propTypes = {
    price : PropTypes.number
}

export default HamburgerHeader