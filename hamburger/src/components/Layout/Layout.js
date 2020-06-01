import React, {Component} from 'react'
import classes from './Layout.module.css'

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

import Aux from '../../hoc/Aux'


class Layout extends Component 
{
    state = {
        sideDrawerVisible : false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ sideDrawerVisible : false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState)=> ({
            sideDrawerVisible : !prevState.sideDrawerVisible
        }))
    }

    render(){
        return(
            <Aux>
                <Toolbar toggled={this.sideDrawerToggleHandler.bind(this)}/>
                <SideDrawer hide={this.sideDrawerCloseHandler.bind(this)} visible={this.state.sideDrawerVisible}/>
                <main className={classes.Main}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout