import React from 'react'
import LogoImage from '../../assets/images/ubuntu-logo.svg'
import classes from './Logo.module.css'

const Logo = () => ( 
    <div className={classes.Logo}>
       <img src={LogoImage} alt="company logo"/>
    </div>
)

export default Logo 