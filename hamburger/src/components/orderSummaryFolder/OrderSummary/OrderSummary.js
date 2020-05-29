import React from 'react'
//import PropTypes from 'prop-types' -> ajouter dans second temps 

import OrderSummaryHeader from '../OrderSummaryHeader/OrderSummaryHeader'
import OrderSummaryFooter from '../OrderSummaryFooter/OrderSummaryFooter'

/*
    Required props 
    -> ingredients 
    -> price 
*/

const OrderSummary = props => {
    
    const ingredientComponents = props.ingredients.map(ingredient => 
        <li key={ingredient.name}>{ingredient.name.toUpperCase()} : {ingredient.count}</li>)
    
    return( 
        <section> 
            <OrderSummaryHeader/>
            {ingredientComponents}
            <OrderSummaryFooter cancel={props.cancel} price={props.price}/> 
        </section>
    )
}

export default OrderSummary

// <OrderSummaryFooter/>