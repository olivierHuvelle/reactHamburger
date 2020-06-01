import axios from 'axios'

const instance = axios.create({
    baseURL : ' https://cors-anywhere.herokuapp.com/https://hamburger-febfe.firebaseio.com'
})

export default instance