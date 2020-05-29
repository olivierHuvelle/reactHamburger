import React, {Component} from 'react'

class Hamburger extends Component
{
    state = {
        ingredients : [ //à refactorer dans un second temps pour aller fetch les prix 
            {name : 'Salad', price : 0.5, count : 0, priceTotal : 0}, 
            {name : 'Bacon', price : 2.5, count : 0, priceTotal : 0}, 
            {name : 'Cheese', price : 1.5, count : 0, priceTotal : 0},
            {name : 'Meat', price : 1.2, count : 0, priceTotal : 0},
        ], 
        price : 0, 
        composition : [],
    }

    render()
    {
        return(
            <p>Ici bientot un super hamburger !</p>
        )
    }

}

export default Hamburger 