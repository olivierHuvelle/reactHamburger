import React, {Component} from 'react'

import HamburgerHeader from '../../components/hamburgerFolder/HamburgerHeader/HamburgerHeader'
import BurgerDrawing from '../../components/hamburgerFolder/HamburgerDrawing/HamburgerDrawing'
import Ingredients from '../../components/hamburgerFolder/Ingredients/Ingredients'

import Modal from '../../components/UI/Modal/Modal'


class Hamburger extends Component
{
    state = {
        ingredients : [ //à refactorer dans un second temps pour aller fetch les prix et ensuite fusionner 
            {name : 'Salad', price : 0.5, count : 0, priceTotal : 0}, 
            {name : 'Bacon', price : 2.5, count : 0, priceTotal : 0}, 
            {name : 'Cheese', price : 1.5, count : 0, priceTotal : 0},
            {name : 'Meat', price : 1.2, count : 0, priceTotal : 0},
        ], 
        price : 0, 
        composition : [],
        purchasable : false, 
        purchasing : true, 
        loading : false,
    }

    ingredientCountHandler = (ingredientName, direction) => {
        const updatedState = [...this.state.ingredients]
        const ingredient = updatedState[updatedState.findIndex(ingredient => ingredient.name === ingredientName)]
        if((ingredient.count === 0 && direction === 'down') || (direction !== 'up' && direction !== 'down'))
        {
            return
        }
      
        this.udpateIngredients(updatedState, ingredient, direction) 
        this.updatePrice() 
        this.updateComposition(ingredient.name, direction)
        this.udpatePurchasable()  
    }

    udpateIngredients = (updatedState, ingredient, direction) => {
        ingredient.count = direction === 'down' ? ingredient.count - 1 : ingredient.count + 1 //update the count
        ingredient.priceTotal = ingredient.count * ingredient.price //update priceTotal
        this.setState({ ingredients : updatedState})
    }

    updatePrice = () => {
        const updatedState = [...this.state.ingredients] // we could use the prevState but works quiet = 
        this.setState({ price : updatedState.reduce((acc, current) => acc + current.priceTotal, 0)})
    }

    updateComposition = (ingredientName, direction) => {
        const updatedState = [...this.state.composition]
        direction === 'up' ? updatedState.push(ingredientName) : updatedState.splice(updatedState.lastIndexOf(ingredientName),1)
        this.setState({ composition : updatedState })
    }

    udpatePurchasable = () => {
       this.setState(prevState => ({
           purchasable : prevState.price > 0 ? true : false
       }))
    }

    modalHandle = (hide) => { 
        this.state.purchasable && !hide ? this.setState({purchasing : true}) : this.setState({purchasing : false})
    }

    purchaseHandler = () => {
        this.setState({ purchasing : true }) 
    }

    render()
    {
        /*
        const orderSummaryComponent = this.state.loading ? <Spinner/> : 
            <OrderSummary 
                ingredients={this.state.ingredients} 
                cancel={this.modalHandle} 
                price={this.state.price} 
                purchase={this.continuePuchase.bind(this)}
            />
        */

        return(
            <div className="Hamburger">
                <Modal visible={this.state.purchasing} hide={this.modalHandle.bind(this)}>

                </Modal>
                <HamburgerHeader price={this.state.price}/>
                <BurgerDrawing ingredients={this.state.composition}/>
                <Ingredients ingredients={this.state.ingredients} changeCount={this.ingredientCountHandler.bind(this)}/>
            </div>
        )
    }
}

export default Hamburger 


//<button disabled={!this.state.purchasable} onClick={()=>{this.modalHandle(true)}}>Acheter</button>
/*
<Modal visible={this.state.purchasing} change={this.modalHandle} >
                   {orderSummaryComponent}
                </Modal>
*/