import React from 'react' 
import Ingredient from './Ingredient/Ingredient'

const Ingredients = props => (
    props.ingredients.map(ingredient => <Ingredient  key={ingredient.name} ingredient={ingredient} changeCount={props.changeCount}/> )
)

export default Ingredients

