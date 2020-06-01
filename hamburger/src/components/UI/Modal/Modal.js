import React , {memo} from 'react'
import PropTypes from 'prop-types'
import classes from './Modal.module.css'

import Backdrop from '../Backdrop/Backdrop'

import Aux from '../../../hoc/Aux'

/*
     Required props 
    -> visible (boolean) if true -> displays the modal 
    -> hide (function) 
        on click send true to parent ---> visible from true to false BY CROSS ELEMENT 
        passing to Backdrop component 
*/

const Modal = props => {
   
    const modalComponent = !props.visible ? null : 
        <Aux>
            <div className={classes.Modal}>
                {props.children}
                <div className={classes.Cross} onClick={()=>{props.hide(true)}}>X</div>
            </div>
            <Backdrop visible={props.visible} hide={props.hide}/>
        </Aux>

    return(
        modalComponent
    )
}

Modal.propTypes = {
    visible : PropTypes.bool, 
    hide : PropTypes.func
}

export default memo(Modal) 

