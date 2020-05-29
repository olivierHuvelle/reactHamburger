import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../UI/Button/Button'

/*
    Required props 
    -> cancel : func 
    -> purchase : func 
    -> price : number 
*/

const OrderSummaryFooter = props => (
    <footer>
        <Button type="Danger" click={()=>{props.cancel(false)}}>Annuler</Button>
        <span>{props.price.toFixed(2)} $</span>
        <Button type="Success" click={()=>{props.purchase()}}>Continuer</Button>
    </footer>
)


OrderSummaryFooter.propTypes = {
    price : PropTypes.number, 
    cancel : PropTypes.func, 
    purchase : PropTypes.func
}


export default OrderSummaryFooter