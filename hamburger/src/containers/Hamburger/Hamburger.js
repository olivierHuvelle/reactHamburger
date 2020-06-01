import React, {Component} from 'react'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import HamburgerHeader from '../../components/hamburgerFolder/HamburgerHeader/HamburgerHeader'
import BurgerDrawing from '../../components/hamburgerFolder/HamburgerDrawing/HamburgerDrawing'
import Ingredients from '../../components/hamburgerFolder/Ingredients/Ingredients'

import OrderSummary from '../../components/orderSummaryFolder/OrderSummary/OrderSummary'

import Modal from '../../components/UI/Modal/Modal'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import Aux from '../../hoc/Aux'

class Hamburger extends Component
{
    state = {
        ingredients : null, 
        ingredientInformations : null,
        price : 0, 
        composition : [],
        purchasable : false, 
        purchasing : false, 
        loading : false,
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => {
                const ingredients = Object.entries(response.data).map
                    (ingredient => ({ name : ingredient[0], price : ingredient[1], count : 0, priceTotal : 0}) )
                this.setState({ingredients : ingredients})
            })
       
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

    purchaseContinueHandler = () => {
        this.setState({loading : true}) //start loading 
        const shopping = {
            ingredients : this.state.ingredients.map(ingredient => ({
                name : ingredient.name, 
                count : ingredient.count
                })), 
            bill : this.state.price, 
            customer : {
                name : 'Olivier', 
                adress : {
                    street : 'Rue due djzeidjoze', 
                    zipCode : '1400', 
                    country : 'Belgium', 
                }, 
                email : 'bidon@test.bidule', 
                deliveryMethod : 'fastest',
            }
        }
        axios.post('/orders.json', shopping)
            .then(response => this.setState({loading : false, purchasing : false})) //stops loading 
            .catch(e => this.setState({ loading : false, purchasing : false}))
    }

    render()
    {
       const orderSummaryComponent = this.state.loading ? <Spinner/> : 
            <OrderSummary 
                ingredients={this.state.ingredients} 
                price={this.state.price} 
                cancel={this.modalHandle.bind(this)} //reste le purchase 
                purchase={this.purchaseContinueHandler.bind(this)}
            />
        const burgerDisplayComponent = !this.state.ingredients ? <Spinner/> : 
            <Aux>
                <HamburgerHeader price={this.state.price}/>
                <BurgerDrawing ingredients={this.state.composition}/>
                <Ingredients ingredients={this.state.ingredients} changeCount={this.ingredientCountHandler.bind(this)}/>
            </Aux>

        return(
            <div className="Hamburger">
                <Modal visible={this.state.purchasing} hide={this.modalHandle.bind(this)}>
                    {orderSummaryComponent}
                </Modal>
                {burgerDisplayComponent}
                <Button type="Success" disabled={!this.state.purchasable} click={this.purchaseHandler.bind(this)}>Acheter</Button>
            </div>
        )
    }
}

export default withErrorHandler(Hamburger, axios) 
