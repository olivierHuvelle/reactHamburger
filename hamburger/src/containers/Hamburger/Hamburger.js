import React, {Component} from 'react'

import HamburgerHeader from '../../components/hamburgerFolder/HamburgerHeader/HamburgerHeader'
import BurgerDrawing from '../../components/hamburgerFolder/HamburgerDrawing/HamburgerDrawing'
import Ingredients from '../../components/hamburgerFolder/Ingredients/Ingredients'

import OrderSummary from '../../components/orderSummaryFolder/OrderSummary/OrderSummary'

import Modal from '../../components/UI/Modal/Modal'
import Button from '../../components/UI/Button/Button'

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
        purchasing : false, 
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
       const orderSummaryComponent = this.state.loading ? null : 
            <OrderSummary 
                ingredients={this.state.ingredients} 
                price={this.state.price} 
                cancel={this.modalHandle.bind(this)} //reste le purchase 
            />

        return(
            <div className="Hamburger">
                <Modal visible={this.state.purchasing} hide={this.modalHandle.bind(this)}>
                    {orderSummaryComponent}
                </Modal>
                <HamburgerHeader price={this.state.price}/>
                <BurgerDrawing ingredients={this.state.composition}/>
                <Ingredients ingredients={this.state.ingredients} changeCount={this.ingredientCountHandler.bind(this)}/>
                <Button type="Success" disabled={!this.state.purchasable} click={this.purchaseHandler.bind(this)}>Acheter</Button>
            </div>
        )
    }
}

export default Hamburger 


//<button disabled={!this.state.purchasable} onClick={()=>{this.modalHandle(true)}}>Acheter</button>
